import React, { useState } from "react";
import {
  Button,
  Input,
  DatePicker,
  Select,
  Layout,
} from "antd";

const { Header, Footer, Sider, Content } = Layout;
import { Link } from "react-router-dom";
import axios from "axios";
import { SyncOutlined, UploadOutlined } from "@ant-design/icons";
import { Address, Balance, EtherInput, AddressInput, Hint, RelationToNow } from "../components";
import { parseEther, formatEther } from "@ethersproject/units";
import {ethers} from "ethers";
import { Alert } from "antd";
import { ipfs, ipfsLinkFromHash, numberWithCommas, relationToNow, truncateString } from "../helpers";
import { useExternalContractLoader, useContractReader, useBalance } from "../hooks";
import FetchHorsey from '../hooks/FetchHorsey.js'

import { useParams } from "react-router-dom";
import { create as createIPFSClient } from "ipfs-http-client";
import ReactMarkdown from "react-markdown";
import NyanStrategyAbi from "../contracts/NyanStrategy.abi";
import ERC20Abi from "../contracts/ERC20.abi";
import NyanRewardsContractAbi from "../contracts/NyanRewardsContract.abi";
import { BigNumber } from "@ethersproject/bignumber";
import StArbisAddress from "../contracts/StArbis.address";
import StArbisABI from "../contracts/StArbis.abi";
import ArbiSpinner from "./ArbiSpinner";
const ipfsClient = createIPFSClient("https://ipfs.infura.io:5001");
const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

export default function STArbisUI(props) {
  //props{match.params, provider, userSigner, address, tx}
  const wETH = "0x82af49447d8a07e3bd95bd0d56f35241523fbab1";

  const { provider, userSigner, address, tx, injectedProvider, farmAddress, warning, hideDeposit, isLP } = props;
  const { farmId } = useParams();
  const farmInstance = useExternalContractLoader(injectedProvider, farmAddress, StArbisABI);
  const tokenAddress = useContractReader({ stARBIS: farmInstance }, "stARBIS", "arbisToken", []);
  const Z2OAddress = "0xdb96f8efd6865644993505318cc08ff9c42fb9ac";
  const umamiAddress = "0x1622bF67e6e5747b81866fE0b85178a93C7F86e3";
  const cheemsAddress = "0x75a2f30929c539e7d4ee033c9331b89f879c0cf7";
  
  console.log(`farmAddress ${farmAddress}`);

  const tokenInstance = useExternalContractLoader(injectedProvider, tokenAddress, ERC20Abi);

  const userUnderlyingBalance = useContractReader({ ERC20: tokenInstance }, "ERC20", "balanceOf", [address]);
  const underlyingName = useContractReader({ ERC20: tokenInstance }, "ERC20", "name", []);
  const underlyingSymbol = useContractReader({ ERC20: tokenInstance }, "ERC20", "symbol", []);
  const underlyingTotalSupply = useContractReader({ ERC20: tokenInstance }, "ERC20", "totalSupply", []);

  const approved = useContractReader({ ERC20: tokenInstance }, "ERC20", "allowance", [address, farmAddress]);

  const name = useContractReader({ stARBIS: farmInstance }, "stARBIS", "name", []);
  const symbol = useContractReader({ stARBIS: farmInstance }, "stARBIS", "symbol", []);
  const totalDeposits = useContractReader({ stARBIS: farmInstance }, "stARBIS", "totalSupply", []);
  const shareBalance = useContractReader({ stARBIS: farmInstance }, "stARBIS", "balanceOf", [address]);
  const approvedShares = useContractReader({ stARBIS: farmInstance }, "stARBIS", "allowance", [address, farmAddress]);

  const availablewETH = useContractReader({ stARBIS: farmInstance }, "stARBIS", "getAvailableTokenRewards", [wETH]);
  const availablewARBIS = useContractReader({ stARBIS: farmInstance }, "stARBIS", "getAvailableTokenRewards", [tokenAddress]);
  const availableZ2O = useContractReader({ stARBIS: farmInstance }, "stARBIS", "getAvailableTokenRewards", [Z2OAddress]);
  const availableUmami = useContractReader({ stARBIS: farmInstance }, "stARBIS", "getAvailableTokenRewards", [umamiAddress]);

  const availableCheems = useContractReader({ stARBIS: farmInstance }, "stARBIS", "getAvailableTokenRewards", [cheemsAddress]);

 
 

  const [apr,setApr] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [visible, setVisible] = React.useState(false);
  const [writeLoading, setWriteLoading] = React.useState(false);
  const [amountToDeposit, setAmountToDeposit] = React.useState("0");
  const [amountToWithdraw, setAmountToWithdraw] = React.useState("0");
  React.useEffect(() => {
    if (injectedProvider != undefined && shareBalance != undefined && farmInstance != undefined) {
      setLoading(false);
    }
  }, [injectedProvider, shareBalance, farmInstance]);
  React.useEffect(async () => {
  
    try {
      let horseyFetch = await fetch('https://horseysauce.xyz');
    horseyFetch = await horseyFetch.json();
    console.log(horseyFetch)
    let horseyData = "";
    console.log(isLP,"is the lp")
    if(isLP) {
       horseyData = horseyFetch.stArbisEth.apr
    }else
    {horseyData = horseyFetch.stArbis.apr}
      setApr(horseyData)
      // console.log("go to apr",apr)
      
      } catch(error) {console.log('Horsey error ',error)}
   },[]);

  async function handleInvest() {
    setWriteLoading(true);

    if (!isApproved()) {
      console.log(`approving for token ${tokenAddress} spender ${farmAddress} amount ${underlyingTotalSupply}`);
      //do approve tx
      const data = tokenInstance.interface.encodeFunctionData("approve", [farmAddress, underlyingTotalSupply]);
      tx(
        userSigner.sendTransaction({
          to: tokenAddress,
          data: data,
        }),
      );
      setTimeout(() => {
        setVisible(false);
        setWriteLoading(false);
      }, 2000);
    } else {
      console.log(`doing stake with approval for ${approved} and amount ${parseEther(amountToDeposit)}`);
      //do stake tx
      const data = farmInstance.interface.encodeFunctionData("stake", [parseEther(amountToDeposit)]);

      tx(
        userSigner.sendTransaction({
          to: farmAddress,
          data: data,
        }),
      );
      setTimeout(() => {
        setVisible(false);
        setWriteLoading(false);
      }, 2000);
    }
  }

  async function handleWithdraw() {
    setWriteLoading(true);


    //console.log(`doing stake with approval for ${approved} and amount ${parseEther(amountToDeposit)}`);
    //do stake tx
    const data = farmInstance.interface.encodeFunctionData("withdraw", [parseEther(amountToWithdraw)]);

    tx(
      userSigner.sendTransaction({
        to: farmAddress,
        data: data,
      }),
    );
    setTimeout(() => {
      setVisible(false);
      setWriteLoading(false);
    }, 2000);
  }

  async function handleCompound() {
    setWriteLoading(true);


    //console.log(`doing stake with approval for ${approved} and amount ${parseEther(amountToDeposit)}`);
    //do stake tx
    const data = farmInstance.interface.encodeFunctionData("collectRewards", []);

    tx(
      userSigner.sendTransaction({
        to: farmAddress,
        data: data,
      }),
    );
    setTimeout(() => {
      setVisible(false);
      setWriteLoading(false);
    }, 2000);
  }

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  function isApproved() {
    if (!approved) {
      return false;
    }

    if (approved == BigInt("0")) {
      return false;
    }

    return true;
  }

  function isApprovedForShares() {
    if (!approvedShares) {
      return false;
    }

    if (approvedShares == BigInt("0")) {
      return false;
    }

    return true;
  }

  function showSymbol() {
    return " $" + (underlyingSymbol ? underlyingSymbol : "");
  }

  function showShareSymbol() {
    return " $" + (symbol ? symbol : "");
  }

  const SECONDS_PER_YEAR = 365.25 * 24 * 60 * 60;
  //const BLOCKS_IN_A_YEAR = SECONDS_PER_YEAR / 14;

 
  return (
    <div>
      {loading ? (
        <div>
          <ArbiSpinner />
          {injectedProvider == undefined ?
            <h4>Connect your wallet on the Arbitrum Network</h4> : ""}
        </div>
      ) : (
        <div>
          <Layout>
            <Content className="farm">
              <h1>{props.farmName} Staking</h1>
              <a href={`https://arbiscan.io/address/${farmAddress}`} target="_blank" rel="noopener noreferrer">
                {" "}
                <Hint hint={<>{truncateString(`${farmAddress}`, 8)}</>} />
              </a>

              { apr &&  <h2>APR:&nbsp; 
                  {apr}%</h2>}

              <Hint hint={warning ? warning : ""} />

              Stake your {showSymbol()} for ${name ? name : ""} to earn passive ${props.earn} generated by fees from all around the Arbi's food court automatically!
              <p className="tvl">
                <b>TVL:</b> {numberWithCommas(parseFloat(formatEther(totalDeposits ? totalDeposits : "0")).toFixed(0))} {showSymbol()}
                <br />
                <b>1 {showShareSymbol()}</b> == 1 {showSymbol()}
              </p>
              {
                !isLP ?
                <ul>
                <li>10% early withdrawal fee on any withdrawal amount which decays linearly to 0 over 7 days since any last deposit</li>
                <li>95% of the resulting fee is redistributed to stakers</li>
                <li>5% of the resulting fee goes to the treasury</li>
              </ul>
              :<></>
              }
            
              <div className="action-box">
                {hideDeposit
                  ?
                  <p>New Deposits to this farm have been disabled. Please migrate to the new one to continue earning rewards</p>
                  :
                  <>
                    <h3>Deposit</h3>
                    <Hint
                      hint={
                        <span>
                          MAX:{" "}
                          <span
                            style={{ color: "#d8121b", cursor: "pointer" }}
                            onClick={() => {
                              setAmountToDeposit(formatEther(userUnderlyingBalance ? userUnderlyingBalance : "0"));
                            }}
                          >
                            {parseFloat(formatEther(userUnderlyingBalance ? userUnderlyingBalance : "0")).toFixed(3)}
                          </span>
                          {showSymbol()}
                        </span>
                      }
                    />
                    <Input value={amountToDeposit} onChange={e => setAmountToDeposit(e.target.value)} />
                    <Button style={{ margin: "3px", padding: "0px 10px" }} onClick={() => handleInvest()}>{isApproved() ? "Stake" : "Approve"}</Button>
                    <Hint
                      hint={
                        <span>
                          Every time you deposit it will reset the 7 day time limit on withdraw fees.
                        </span>
                      }
                    />
                  </>}
              </div>

              <div className="action-box">
                <h3>Withdraw</h3>
                <Hint
                  hint={
                    <span>
                      MAX:{" "}
                      <span
                        style={{ color: "#d8121b", cursor: "pointer" }}
                        onClick={() => {
                          setAmountToWithdraw(formatEther(shareBalance ? shareBalance : "0"));
                        }}
                      >
                        {parseFloat(formatEther(shareBalance ? shareBalance : "0")).toFixed(3)}
                      </span>
                      {showShareSymbol()}
                    </span>
                  }
                />
                <Input value={amountToWithdraw} onChange={e => setAmountToWithdraw(e.target.value)} />
                <Button style={{ margin: "3px", padding: "0px 10px" }} onClick={() => handleWithdraw()}>{isApproved() ? "Withdraw" : "Approve"}</Button>
                
                <Hint
                  hint={
                    isLP ?
                    <span>
                      If you deposited in the last 7 days a 10% early withdraw fee will be charged to the amount you are withdrawing.
                    </span> : <></>
                  }
                />
                <Hint
                  hint={
                    <span>
                      When you withdraw any pending Tokens will be paid out to your address automatically.
                    </span>
                  }
                />
              </div>

              <div className="action-box">
                <h3>Collect Rewards</h3>
                <Hint
                  hint={
                    <span>
                      Collect all pending rewards your st[{props.farmName}] generated 💸
                    </span>
                  }
                />

                {!isLP ?<>
                <p>
                  Available Arbis:{" " + parseFloat(formatEther(availablewARBIS ? availablewARBIS : "0")).toFixed(4)}
                </p>
                <p>
                  Available wETH:{" " + formatEther(availablewETH ? availablewETH : "0")}
                </p>
                <p>
                  Available Cheems:{" " + formatEther(availableCheems ? availableCheems : "0")}
                </p>
                </>:<>
                
                <p>
                  Available Arbis/ETH LP:{" " + parseFloat(formatEther(availablewARBIS ? availablewARBIS : "0")).toFixed(4)}
                </p>
                </>}
                <p>
                  Available UMAMI:{" " + ethers.utils.formatUnits(availableUmami ? availableUmami : "0",9)}
                </p>
                <p>
                  Available Z2O:{" " + ethers.utils.formatUnits(availableZ2O ? availableZ2O : "0",9)}
                </p>
                <Button onClick={() => handleCompound()}>Collect All</Button>
                <Hint
                  hint={
                    <span>
                      There is no rush to collect your rewards, they are reserved for you and will be there when you want to collect them. No one else can touch them.
                    </span>
                  }
                />
              </div>

              {/* 
              <Button onClick={() => setVisible(true)}>Staking Interface</Button> */}
            </Content>
          </Layout>
        </div>
      )}
    </div>
  );
}
