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
import { Address, Balance, EtherInput, AddressInput, Hint, RelationToNow  } from "../components";
import { parseEther, formatEther } from "@ethersproject/units";
import { Alert } from "antd";
import { ipfs, ipfsLinkFromHash, numberWithCommas, relationToNow, truncateString } from "../helpers";
import { useExternalContractLoader, useContractReader, useBalance } from "../hooks";

import { useParams } from "react-router-dom";
import { create as createIPFSClient } from "ipfs-http-client";
import ReactMarkdown from "react-markdown";
import NyanETHStrategyAbi from "../contracts/NyanETHStrategy.abi";
import ERC20Abi from "../contracts/ERC20.abi";
import NyanTokenAddress from "../contracts/NyanToken.address";
import NyanTokenAbi from "../contracts/NyanToken.abi";
import NyanETHSushiLPAddress from "../contracts/NyanETHSushiLP.address";
import SushiLPAbi from "../contracts/SushiLP.abi"
import WETHTokenAddress from "../contracts/WETHToken.address";
import NyanRewardsContractAbi from "../contracts/NyanRewardsContract.abi";
import { BigNumber } from "@ethersproject/bignumber";
import ArbiSpinner from "./ArbiSpinner";
const ipfsClient = createIPFSClient("https://ipfs.infura.io:5001");
const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

export default function FarmNYANETHUI(props) {
  //props{match.params, provider, userSigner, address, tx}
  const { nyanETHPrice, provider, userSigner, address, tx, injectedProvider, farmAddress, farmName, stakingPoolAddress, specialWarning } = props;
  //const { farmAddress } = useParams();
  const farmInstance = useExternalContractLoader(injectedProvider, farmAddress, NyanETHStrategyAbi);
  const tokenAddress = useContractReader({ NYANETHStrategy: farmInstance }, "NYANETHStrategy", "depositToken", []);

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
console.log(`underlying name ${underlyingName}`);
  const approved = useContractReader({ ERC20: tokenInstance }, "ERC20", "allowance", [address, farmAddress]);

  const name = useContractReader({ NYANETHStrategy: farmInstance }, "NYANETHStrategy", "name", []);
  const symbol = useContractReader({ NYANETHStrategy: farmInstance }, "NYANETHStrategy", "symbol", []);
  const totalDeposits = useContractReader({ NYANETHStrategy: farmInstance }, "NYANETHStrategy", "totalDeposits", []);
  const shareBalance = useContractReader({ NYANETHStrategy: farmInstance }, "NYANETHStrategy", "balanceOf", [address]);
  const approvedShares = useContractReader({ NYANETHStrategy: farmInstance }, "NYANETHStrategy", "allowance", [address, farmAddress]);
  const underlyingTokensPerShare = useContractReader({ NYANETHStrategy: farmInstance }, "NYANETHStrategy", "getDepositTokensForShares", [BigInt(1000000000000000000)]);
  const usersUnderlyingTokensAvailable = useContractReader({ NYANETHStrategy: farmInstance }, "NYANETHStrategy", "getDepositTokensForShares", [shareBalance ? shareBalance : 0]);

  /* 1) query WETH token contract for LP balance */
  const wethTokenInstance = useExternalContractLoader(injectedProvider, WETHTokenAddress, ERC20Abi);
  const wethLPBalance = useContractReader({ ERC20: wethTokenInstance }, "ERC20", "balanceOf", [NyanETHSushiLPAddress]);
  const lpInstance = useExternalContractLoader(injectedProvider, NyanETHSushiLPAddress, SushiLPAbi); 
  const lpTotalSupply = useContractReader({ SLP: lpInstance }, "SLP", "totalSupply")


  let stakingPoolInstance;
  let stakingPoolRewardRate;
  let stakingPoolTotalSupply;
  if (stakingPoolAddress) {
     stakingPoolInstance = useExternalContractLoader(injectedProvider, stakingPoolAddress, NyanRewardsContractAbi);
    /* `rewardRate` is the reward emitted per sec */
  
     stakingPoolRewardRate = useContractReader({ NyanRewards: stakingPoolInstance }, "NyanRewards", "rewardRate");
     stakingPoolTotalSupply = useContractReader({ NyanRewards: stakingPoolInstance }, "NyanRewards", "totalSupply");
  }
 

  const SECONDS_PER_YEAR = 365.25 * 24 * 60 * 60;
  //const BLOCKS_IN_A_YEAR = SECONDS_PER_YEAR / 14;
  const apr = () => {
    const _stakingPoolTotalSupply = parseFloat(formatEther(stakingPoolTotalSupply));
    const _wethLPBalance = parseFloat(formatEther(wethLPBalance));
    const _stakingSLPRatio = _stakingPoolTotalSupply / parseFloat(formatEther(lpTotalSupply));
    const lpETHValue = _wethLPBalance * 2;
    return 100 * parseFloat(formatEther(stakingPoolRewardRate)) * SECONDS_PER_YEAR * nyanETHPrice / (lpETHValue * _stakingSLPRatio); 
  }
  /* https://gist.github.com/sterlu/4b44f59ea665819974ae684d7f564d9b */
  const aprToApy = (interest, frequency = 12) => ((1 + (interest / 100) / frequency) ** frequency - 1) * 100;
  
  const [loading, setLoading] = React.useState(true);
  const [visible, setVisible] = React.useState(false);
  const [writeLoading, setWriteLoading] = React.useState(false);
  const [amountToDeposit, setAmountToDeposit] = React.useState("0");
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
        </div>
      ) : (
        <div>
          <Layout>
            <Content className="farm">
              <h1>{farmName}</h1>
              {
                nyanETHPrice && wethLPBalance && stakingPoolAddress && stakingPoolRewardRate && stakingPoolTotalSupply && lpTotalSupply && (
                  <h2>APY: {numberWithCommas((aprToApy(apr())).toFixed(0))}%</h2>
                ) 
              }
              <a href={`https://arbiscan.io/address/${farmAddress}`} target="_blank" rel="noopener noreferrer">
                {" "}
                <Hint hint={<>{truncateString(`${farmAddress}`, 8)}</>} />
              </a>
              {specialWarning ? (<p className="special-warning">{specialWarning}</p>) : ""}
              Stake your NYAN/ETH  $SLP Tokens for {showShareSymbol() ? showShareSymbol() : ""} in Arbi to let them compound automatically!
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
