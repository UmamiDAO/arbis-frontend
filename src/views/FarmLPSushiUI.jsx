import React, { useState } from "react";
import {
  InputNumber,
  Upload,
  Button,
  List,
  Divider,
  Image,
  Input,
  Card,
  DatePicker,
  Space,
  Slider,
  Switch,
  Progress,
  Select,
  Layout,
  Modal,
  Row,
} from "antd";

const { Header, Footer, Sider, Content } = Layout;
import { Link } from "react-router-dom";
import axios from "axios";
import { SyncOutlined, UploadOutlined } from "@ant-design/icons";
import { Address, Balance, EtherInput, AddressInput, Hint, RelationToNow } from "../components";
import { parseEther, formatEther } from "@ethersproject/units";
import { Alert } from "antd";
import { ipfs, ipfsLinkFromHash, relationToNow, truncateString, numberWithCommas } from "../helpers";
import { useExternalContractLoader, useContractReader, useBalance } from "../hooks";
import FetchHorsey from '../hooks/FetchHorsey.js'


import { useParams } from "react-router-dom";
import { create as createIPFSClient } from "ipfs-http-client";
import ReactMarkdown from "react-markdown";
import NyanETHStrategyAbi from "../contracts/NyanETHStrategy.abi";
import ERC20Abi from "../contracts/ERC20.abi";
import NyanRewardsContractAbi from "../contracts/NyanRewardsContract.abi";
import { BigNumber } from "@ethersproject/bignumber";
import ArbiSpinner from "./ArbiSpinner";
import ZapperAbi from "../contracts/Zapper.abi";
const ipfsClient = createIPFSClient("https://ipfs.infura.io:5001");
const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

export default function FarmLPSushiUI(props) {
  //props{match.params, provider, userSigner, address, tx}
  const { provider, userSigner, address, tx, injectedProvider, farmAddress, farmName, specialWarning, hint, hideDeposit, zapperAddress } = props;
  //const { farmAddress } = useParams();
  const farmInstance = useExternalContractLoader(injectedProvider, farmAddress, NyanETHStrategyAbi);
  const tokenAddress = useContractReader({ NYANETHStrategy: farmInstance }, "NYANETHStrategy", "depositToken", []);

  let zapperInstance;
  if (zapperAddress) {
    zapperInstance = useExternalContractLoader(injectedProvider, zapperAddress, ZapperAbi);
  }
  const ETHBalance = useBalance(provider, address);
  console.log(`balance is ${ETHBalance}`);

  ///nyan specific code that wont work for other farms yet
  //const stakingContractAddress = useContractReader({ NyanStrategy: farmInstance }, "NyanStrategy", "stakingContract", []);
  //const stakingContactInstance = useExternalContractLoader(injectedProvider, stakingContractAddress, NyanRewardsContractAbi);
  //const totalAvailableToCompound = useContractReader({ NyanRewards: stakingContactInstance }, "NyanRewards", "userRewards", [farmAddress]);
  //const compoundingReward = totalAvailableToCompound ? BigNumber.from(totalAvailableToCompound).div(200): 0;
  //console.log(`totalAvailableToCompound ${totalAvailableToCompound} compounding reward ${compoundingReward}`);
  ///end of specific code that wont work for other farms yet

  const tokenInstance = useExternalContractLoader(injectedProvider, tokenAddress, ERC20Abi);

  const userUnderlyingBalance = useContractReader({ ERC20: tokenInstance }, "ERC20", "balanceOf", [address]);
  const underlyingName = useContractReader({ ERC20: tokenInstance }, "ERC20", "name", []);
  const underlyingSymbol = useContractReader({ ERC20: tokenInstance }, "ERC20", "symbol", []);
  const underlyingTotalSupply = useContractReader({ ERC20: tokenInstance }, "ERC20", "totalSupply", []);



  const approved = useContractReader({ ERC20: tokenInstance }, "ERC20", "allowance", [address, farmAddress]);

  const name = useContractReader({ NYANETHStrategy: farmInstance }, "NYANETHStrategy", "name", []);
  const symbol = useContractReader({ NYANETHStrategy: farmInstance }, "NYANETHStrategy", "symbol", []);
  const totalDeposits = useContractReader({ NYANETHStrategy: farmInstance }, "NYANETHStrategy", "totalDeposits", []);
  const shareBalance = useContractReader({ NYANETHStrategy: farmInstance }, "NYANETHStrategy", "balanceOf", [address]);
  const pendingRewards = useContractReader({ NYANETHStrategy: farmInstance }, "NYANETHStrategy", "checkReward", []);
  const approvedShares = useContractReader({ NYANETHStrategy: farmInstance }, "NYANETHStrategy", "allowance", [address, farmAddress]);
  const underlyingTokensPerShare = useContractReader({ NYANETHStrategy: farmInstance }, "NYANETHStrategy", "getDepositTokensForShares", [BigInt(1000000000000000000)]);
  const usersUnderlyingTokensAvailable = useContractReader({ NYANETHStrategy: farmInstance }, "NYANETHStrategy", "getDepositTokensForShares", [shareBalance]);
  const rewardTokenAddress = useContractReader({ NYANETHStrategy: farmInstance }, "NYANETHStrategy", "rewardToken", []);

  const rewardTokenInstance = useExternalContractLoader(injectedProvider, rewardTokenAddress, ERC20Abi);
  const rewardTokenSymbol = useContractReader({ ERC20: rewardTokenInstance }, "ERC20", "symbol", []);

  /* https://gist.github.com/sterlu/4b44f59ea665819974ae684d7f564d9b */
  const aprToApy = (interest, frequency = 365) => ((1 + (interest / 100) / frequency) ** frequency - 1) * 100;
  
  let horseyData = {}
  let apr = "";
  let tradingAPR = "";
  let totalValueStaked = "";
  let underlyingTokenPrice = "";
  let combinedAPR = 0;

    try {
  horseyData = FetchHorsey(farmAddress);
  apr = horseyData.apr;
  tradingAPR = horseyData.tradingAPR;
  totalValueStaked = horseyData.totalValueStaked;
  underlyingTokenPrice = horseyData.underlyingTokenPrice;
  combinedAPR = aprToApy(parseFloat(apr)+parseFloat(tradingAPR)).toFixed(2);
  } catch(error) {console.log('Horsey error ',error)}



  console.log(`underlying name share ${name} ${underlyingName}, approval ${approved}`);
  const [loading, setLoading] = React.useState(true);
  const [visible, setVisible] = React.useState(false);
  const [writeLoading, setWriteLoading] = React.useState(false);
  const [amountToDeposit, setAmountToDeposit] = React.useState("0");
  const [amountToZap, setAmountToZap] = React.useState("0");
  const [amountToWithdraw, setAmountToWithdraw] = React.useState("0");
  React.useEffect(() => {
    if (injectedProvider != undefined && underlyingName != undefined) {
      setLoading(false);
    }
  }, [injectedProvider, underlyingName]);

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

  async function handleZap() {
    setWriteLoading(true);


    //console.log(`doing stake with approval for ${approved} and amount ${parseEther(amountToDeposit)}`);
    //do stake tx
    const data = zapperInstance.interface.encodeFunctionData("zap", []);

    tx(
      userSigner.sendTransaction({
        to: zapperAddress,
        data: data,
        value: parseEther(amountToZap)
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
  function showSymbol() {
    return " $" + (underlyingSymbol ? underlyingSymbol : "");
  }

  function showShareSymbol() {
    return " $" + (symbol ? symbol : "");
  }

  return (
    <div>
      {loading ? (
        <div>
          <ArbiSpinner />
          {injectedProvider == undefined ?
            <h4>Connect your wallet on the Arbitrum Network</h4> : ""}

{specialWarning ? (<p className="special-warning">{specialWarning}</p>) : ""}
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
              { !!combinedAPR &&  (
                  <h2>APY: {numberWithCommas(combinedAPR)}%</h2> )}
              

              {specialWarning ? (<p className="special-warning">{specialWarning}</p>) : ""}
              {hint ? (<Hint hint={hint} />) : ""}

              Stake your {underlyingName ? underlyingName : " tokens"} ({showSymbol()})  for {showShareSymbol() ? showShareSymbol() : ""} in Arbi's to let them compound automatically!
              <p className="tvl">
                <b>TVL:</b> {parseFloat(formatEther(totalDeposits ? totalDeposits : "0")).toFixed(3)} {showSymbol()} == {!!totalValueStaked && (<span>${numberWithCommas(totalValueStaked)}</span>)}
                <br />
                <b>1 {showShareSymbol()}:</b> {parseFloat(formatEther(underlyingTokensPerShare ? underlyingTokensPerShare : "0")).toFixed(3)} {showSymbol()}
              </p>
              {zapperAddress ?
                <div className="action-box">
                  {hideDeposit ?
                    <p>🚧This farm is currently closed, please use the newer one!👷‍♀️</p>
                    :
                    <>
                      <h3>Zapper</h3>
                      <Hint
                        hint={
                          <span>
                            MAX:{" "}
                            <span
                              style={{ color: "#d8121b", cursor: "pointer" }}
                              onClick={() => {
                                setAmountToDeposit(formatEther(ETHBalance ? ETHBalance : "0"));
                              }}
                            >
                              {parseFloat(formatEther(ETHBalance ? ETHBalance : "0")).toFixed(4)}
                            </span>
                            ETH
                          </span>
                        }
                      />
                      <Input value={amountToZap} onChange={e => setAmountToZap(e.target.value)} />
                      <Button style={{ margin: "3px", padding: "0px 10px" }} onClick={() => handleZap()}>Zap⚡️</Button>
                    </>}
                  <Hint hint={<>Use this interface to automatically transform some ETH into ARBIS/ETH Swapr LP tokens</>} />
                </div>

                : <></>}
              <div className="action-box">
                {hideDeposit ?
                  <p>🚧This farm is currently closed, please use the newer one!👷‍♀️</p>
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
                            {parseFloat(formatEther(userUnderlyingBalance ? userUnderlyingBalance : "0")).toFixed(4)}
                          </span>
                          {showSymbol()}
                        </span>
                      }
                    />
                    <Input value={amountToDeposit} onChange={e => setAmountToDeposit(e.target.value)} />
                    <Button style={{ margin: "3px", padding: "0px 10px" }} onClick={() => handleInvest()}>{isApproved() ? "Stake" : "Approve"}</Button>
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
                        {parseFloat(formatEther(shareBalance ? shareBalance : "0")).toFixed(4)}
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

                <Hint
                  hint={
                    <span>
                      Current Reward: {pendingRewards ? (parseFloat(formatEther(pendingRewards)).toFixed(6) / 200) : 0} {rewardTokenSymbol ? rewardTokenSymbol : ""}
                    </span>
                  }
                />

                <Hint
                  hint={
                    <span>
                     Only  primary reward token amounts are shown. Compounders also receive the same % of any secondary reward token this pool generates
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