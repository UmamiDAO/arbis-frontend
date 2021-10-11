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
import { Alert } from "antd";
import { ipfs, ipfsLinkFromHash, numberWithCommas, relationToNow, truncateString } from "../helpers";
import { useExternalContractLoader, useContractReader, useBalance } from "../hooks";

import { useParams } from "react-router-dom";
import { create as createIPFSClient } from "ipfs-http-client";
import ReactMarkdown from "react-markdown";
import NyanStrategyAbi from "../contracts/NyanStrategy.abi";
import ERC20Abi from "../contracts/ERC20.abi";
import NyanRewardsContractAbi from "../contracts/NyanRewardsContract.abi";
import { BigNumber } from "@ethersproject/bignumber";
import ArbiSpinner from "./ArbiSpinner";
const ipfsClient = createIPFSClient("https://ipfs.infura.io:5001");
const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

export default function FarmUI(props) {
  //props{match.params, provider, userSigner, address, tx}
  const { provider, userSigner, address, tx, injectedProvider, farmAddress, farmName, stakingPoolAddress, specialWarning } = props;
  const { farmId } = useParams();
  const farmInstance = useExternalContractLoader(injectedProvider, farmAddress, NyanStrategyAbi);
  const tokenAddress = useContractReader({ NyanStrategy: farmInstance }, "NyanStrategy", "getUnderlying", []);

  const tokenInstance = useExternalContractLoader(injectedProvider, tokenAddress, ERC20Abi);

  const userUnderlyingBalance = useContractReader({ ERC20: tokenInstance }, "ERC20", "balanceOf", [address]);
  const underlyingName = useContractReader({ ERC20: tokenInstance }, "ERC20", "name", []);
  const underlyingSymbol = useContractReader({ ERC20: tokenInstance }, "ERC20", "symbol", []);
  const underlyingTotalSupply = useContractReader({ ERC20: tokenInstance }, "ERC20", "totalSupply", []);

  const approved = useContractReader({ ERC20: tokenInstance }, "ERC20", "allowance", [address, farmAddress]);

  const name = useContractReader({ NyanStrategy: farmInstance }, "NyanStrategy", "getName", []);
  const symbol = useContractReader({ NyanStrategy: farmInstance }, "NyanStrategy", "symbol", []);
  const totalDeposits = useContractReader({ NyanStrategy: farmInstance }, "NyanStrategy", "totalDeposits", []);
  const shareBalance = useContractReader({ NyanStrategy: farmInstance }, "NyanStrategy", "balanceOf", [address]);
  const approvedShares = useContractReader({ NyanStrategy: farmInstance }, "NyanStrategy", "allowance", [address, farmAddress]);
  const underlyingTokensPerShare = useContractReader({ NyanStrategy: farmInstance }, "NyanStrategy", "getTokensPerShare", [BigInt(1000000000000000000)]);
  const usersUnderlyingTokensAvailable = useContractReader({ NyanStrategy: farmInstance }, "NyanStrategy", "getTokensPerShare", [shareBalance]);

  const stakingPoolInstance = useExternalContractLoader(injectedProvider, stakingPoolAddress, NyanRewardsContractAbi);
  const rewardRate = useContractReader({ NyanRewards: stakingPoolInstance }, "NyanRewards", "rewardRate");
  const totalSupply = useContractReader({ NyanRewards: stakingPoolInstance }, "NyanRewards", "totalSupply");

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
      const data = farmInstance.interface.encodeFunctionData("deposit", [parseEther(amountToDeposit)]);

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
    const data = farmInstance.interface.encodeFunctionData("reinvest", []);

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
  /*const [loadedData, setLoadedData] = React.useState(false);
  const [ethToSpend, setEthToSpend] = React.useState("0.1");
  const [toReceive, setToReceive] = React.useState("0");

  console.log(`loaded address ${raiseAddress}`);
  //step 2 create raise instance
  const raiseInstance = useExternalContractLoader(props.provider, raiseAddress, RaiseAbi);
  //step 3 use instance to get data
  const raiseData = useContractReader({ Raise: raiseInstance }, "Raise", "data", []);
  const raiseName = useContractReader({ Raise: raiseInstance }, "Raise", "name", []);
  const raiseSymbol = useContractReader({ Raise: raiseInstance }, "Raise", "symbol", []);
  const raiseEnd = useContractReader({ Raise: raiseInstance }, "Raise", "endTime", []);
  const totalRaised = useContractReader({ Raise: raiseInstance }, "Raise", "totalRaised", []);
  const okToApe = useContractReader({ Raise: raiseInstance }, "Raise", "okToApe", [address]);
  const totalSupply = useContractReader({ Raise: raiseInstance }, "Raise", "totalSupply", []);
  const pricingContractAddress = useContractReader({ Raise: raiseInstance }, "Raise", "pricing", []);

  console.log(`ok to ape ${okToApe}`);

  const pricingInstance = useExternalContractLoader(props.provider, pricingContractAddress, OneToOnePricingAbi);
  let maxRaise;
  console.log(pricingContractAddress);
  if (raiseData) {
    maxRaise = raiseData[1]
    document.title = raiseName;
  }
  console.log(`raise data ${pricingContractAddress} pricing contract address ${totalRaised} totalRaised ${maxRaise} maxRaise`);
  console.log(raiseData);

  async function loadRaiseData() {
    setLoading(true);
    try {

      var d = await axios.get(raiseData[2]);
      console.log(`axios got data`);
      console.log(d);
      setLoadedData(d.data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  React.useEffect(() => {
    if (raiseData != undefined && !loading) {
      loadRaiseData();
    }

    if (parseFloat(ethToSpend) && pricingInstance) {
      updateToReceive();
    }
  }, [raiseData, ethToSpend]);

  async function updateToReceive() {
    setToReceive(await pricingInstance.viewNextPrice(parseEther(ethToSpend != "" ? ethToSpend : "0"), totalSupply));
  }


  function isOpen(raiseData, raiseEnd) {
    if (raiseData && raiseEnd) {
      const r = relationToNow(raiseData[4], raiseEnd);
      if (r.includes("Closing in")) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }


  async function handleInvest() {
    setWriteLoading(true);
    const data = raiseInstance.interface.encodeFunctionData("apeIn", []);

    //replace with
    //  pricingStrategy address 
    tx(

      userSigner.sendTransaction({
        to: raiseAddress,
        data: data,
        value: parseEther(ethToSpend),
      }),
    );
    setTimeout(() => {
      setVisible(false);
      setWriteLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };


  const backgroundColor = "lightgrey"
  const color = "black"; */

  function showSymbol() {
    return " $" + (underlyingSymbol ? underlyingSymbol : "");
  }

  function showShareSymbol() {
    return " $" + (symbol ? symbol : "");
  }

  const SECONDS_PER_YEAR = 365.25 * 24 * 60 * 60;
  //const BLOCKS_IN_A_YEAR = SECONDS_PER_YEAR / 14;

  /* `rewardRate` is the reward emitted per sec */
  const apr = () => 100* parseFloat(formatEther(rewardRate)) * SECONDS_PER_YEAR / parseFloat(formatEther(totalSupply)); 
  /* https://gist.github.com/sterlu/4b44f59ea665819974ae684d7f564d9b */
  const aprToApy = (interest, frequency = 12) => ((1 + (interest / 100) / frequency) ** frequency - 1) * 100;

  return (
    <div>
      {loading ? (
        <div>
          <ArbiSpinner/>

          {injectedProvider == undefined ? 
          <h4>Connect your wallet on the Arbitrum Network</h4> : ""}
        </div>
      ) : (
        <div>
          <Layout>
            <Content className="farm">
              <h1>{farmName}</h1>
              <a href={`https://arbiscan.io/address/${farmAddress}`} target="_blank" rel="noopener noreferrer">
                {" "}
                <Hint hint={<>{truncateString(`${farmAddress}`, 8)}</>} />
              </a>
              {specialWarning ? (<p className="special-warning">{specialWarning}</p>) : ""}
              {
                rewardRate && totalSupply && (
                  <h2>APY: {numberWithCommas((aprToApy(apr())).toFixed(0))}%</h2>
                ) 
              }
              Stake your {showSymbol()} for ${name ? name : ""} in Arbi to let them compound automatically!

              <p className="tvl">
                <b>TVL:</b> {parseFloat(formatEther(totalDeposits ? totalDeposits : "0")).toFixed(3)} {showSymbol()}
                <br/>
                <b>1 {showShareSymbol()}:</b> {parseFloat(formatEther(underlyingTokensPerShare ? underlyingTokensPerShare : "0")).toFixed(3)} {showSymbol()}
              </p>

              <div className="action-box">
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
                        {formatEther(userUnderlyingBalance ? userUnderlyingBalance : "0")}
                      </span>
                      {showSymbol()}
                    </span>
                  }
                />
                <Input value={amountToDeposit} onChange={e => setAmountToDeposit(e.target.value)} />
                <Button style={{ margin: "3px", padding: "0px 10px" }} onClick={() => handleInvest()}>{isApproved() ? "Stake" : "Approve"}</Button>
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
                        {formatEther(shareBalance ? shareBalance : "0")}
                      </span>
                      {showShareSymbol()}
                    </span>
                  }
                />
                <Input value={amountToWithdraw} onChange={e => setAmountToWithdraw(e.target.value)} />
                <Button style={{ margin: "3px", padding: "0px 10px" }} onClick={() => handleWithdraw()}>{isApproved() ? "Withdraw" : "Approve"}</Button>
                <Hint
                  hint={
                    <span>
                      Get Back:{" "}
                      <span
                        style={{ fontWeight: "bold" }}
                      >
                        {formatEther(usersUnderlyingTokensAvailable ? usersUnderlyingTokensAvailable : "0")}
                      </span>
                      {showSymbol()}
                    </span>
                  }
                />
              </div>

              <div className="action-box">
                <h3>Compound</h3>
                <Hint
                  hint={
                    <span>
                      Compound the pools rewards so everyone keeps earning and get a 0.5% fee for your work!👩‍🌾
                    </span>
                  }
                />



                <Button onClick={() => handleCompound()}>Compound</Button>

                <Hint
                  hint={
                    <span>
                      If the transaction is expensive or says it will fail, dont do it. That means the pool has already compounded recently
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
