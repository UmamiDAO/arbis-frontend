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
import Pool1StrategyABI from "../contracts/Pool1Strategy.abi";
const ipfsClient = createIPFSClient("https://ipfs.infura.io:5001");
const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

export default function Pool1FarmUI(props) {
  //props{match.params, provider, userSigner, address, tx}
  const { provider, userSigner, address, tx, injectedProvider, farmAddress, farmName, stakingPoolAddress, specialWarning } = props;
  const { farmId } = useParams();
  const farmInstance = useExternalContractLoader(injectedProvider, farmAddress, Pool1StrategyABI);
  console.log(`farmInstance ${farmInstance}`);


  const userUnderlyingBalance = useBalance(provider, address);

  const approved = true;//useContractReader({ ERC20: tokenInstance }, "ERC20", "allowance", [address, farmAddress]);

  const name = useContractReader({ NyanStrategy: farmInstance }, "NyanStrategy", "getName", []);
  const symbol = useContractReader({ NyanStrategy: farmInstance }, "NyanStrategy", "symbol", []);
  const totalDeposits = useContractReader({ NyanStrategy: farmInstance }, "NyanStrategy", "totalDeposits", []);
  const shareBalance = useContractReader({ NyanStrategy: farmInstance }, "NyanStrategy", "balanceOf", [address]);

  console.log(`shareBalance ${shareBalance}`);
  const approvedShares = useContractReader({ NyanStrategy: farmInstance }, "NyanStrategy", "allowance", [address, farmAddress]);
  const underlyingTokensPerShare = useContractReader({ NyanStrategy: farmInstance }, "NyanStrategy", "getTokensPerShare", [BigInt(1000000000000000000)]);
  const usersUnderlyingTokensAvailable = useContractReader({ NyanStrategy: farmInstance }, "NyanStrategy", "getTokensPerShare", [shareBalance]);


  const [loading, setLoading] = React.useState(true);
  const [visible, setVisible] = React.useState(false);
  const [writeLoading, setWriteLoading] = React.useState(false);
  const [amountToDeposit, setAmountToDeposit] = React.useState("0");
  const [amountToWithdraw, setAmountToWithdraw] = React.useState("0");
  React.useEffect(() => {
    if (injectedProvider != undefined && shareBalance != undefined && farmInstance != undefined) {
      setLoading(false);
    } 
    console.log(injectedProvider, shareBalance, farmInstance);
  }, [injectedProvider, shareBalance, farmInstance]);

  async function handleInvest() {
    setWriteLoading(true);

   
      console.log(`doing stake with approval for ${approved} and amount ${parseEther(amountToDeposit)}`);
      //do stake tx
      const data = farmInstance.interface.encodeFunctionData("deposit", []);

      tx(
        userSigner.sendTransaction({
          to: farmAddress,
          data: data,
          value: parseEther(amountToDeposit)
        }),
      );
      setTimeout(() => {
        setVisible(false);
        setWriteLoading(false);
      }, 2000);
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
  
  

  function showShareSymbol() {
    return " $" + (symbol ? symbol : "");
  }

  console.log("showing POOL1");

  const SECONDS_PER_YEAR = 365.25 * 24 * 60 * 60;
  //const BLOCKS_IN_A_YEAR = SECONDS_PER_YEAR / 14;

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
             
              Stake your ETH in Arbi to earn yield from this pool1 automatically!

              <p className="tvl">
                <b>TVL:</b> {parseFloat(formatEther(totalDeposits ? totalDeposits : "0")).toFixed(3)} ETH
                <br/>
                <b>1 {showShareSymbol()}:</b> {parseFloat(formatEther(underlyingTokensPerShare ? underlyingTokensPerShare : "0")).toFixed(3)} ETH
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
                      ETH
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
                        ETH
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
