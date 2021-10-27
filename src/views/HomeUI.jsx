import React, { useState } from "react";
import {
  Input,
  DatePicker,
  Select,
} from "antd";

import { SyncOutlined, UploadOutlined } from "@ant-design/icons";
import { Address, Balance, EtherInput, AddressInput, Hint, RaiseTile } from "../components";
import { parseEther, formatEther } from "@ethersproject/units";
import { Alert } from "antd";
import { ipfs, ipfsLinkFromHash, truncateString } from "../helpers";
import { useExternalContractLoader, useContractReader, useBalance } from "../hooks";
import FarmUI from "./FarmUI";
import { create as createIPFSClient } from "ipfs-http-client";
import FarmListAddress from "../contracts/FarmList.address";
import FarmListAbi from "../contracts/FarmList.abi";
import Strategy from "../contracts/Strategy.abi";
import ArbiSpinner from "./ArbiSpinner";

const ipfsClient = createIPFSClient("https://ipfs.infura.io:5001");
const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

function Required() {
  return <span style={{ color: "red" }}>*</span>;
}


export default function CreateUI({
  setPurposeEvents,
  address,
  mainnetProvider,
  userSigner,
  localProvider,
  yourLocalBalance,
  price,
  tx,
  writeContracts,
  injectedProvider,
}) {
  const [loading, setLoading] = useState(true);
  const [currentFarm, setCurrentFarm] = useState("NYANSTRATEGY");
  const inUseProvider = injectedProvider;
  const instance = useExternalContractLoader(inUseProvider, FarmListAddress, FarmListAbi);
  const farm0 = useContractReader({ FarmList: instance }, "FarmList", "farms", [BigInt(0)]);
  const raiseCount = 0;

  function showFarms() {
    let cur = raiseCount - 1;
    if (raiseCount > 3) {
      cur = raiseCount + 3 - raiseCount;
    }
    let raises = [];
    console.log(`loading raises ${cur}`);
    while (cur >= 0) {
      raises.push(
        <span>{farm0}</span> /* {<RaiseTile
                provider={inUseProvider}
                raiseID={cur}
                factoryInstance={instance}
                key={cur}
                /> }*/,
      );

      cur = cur - 1;
    }
    return raises.map(i => i);
  }

  React.useEffect(() => {
    if (injectedProvider != undefined) {
      setLoading(false);
    }
  }, [injectedProvider]);



  function setFarm(farm) {
    setCurrentFarm("RESET");
    setTimeout(function () {
      setCurrentFarm(farm)
    }, 100);
  }

  return (
    <div className="select-farms">
      {loading ? (
        <div>
          <ArbiSpinner />
          {injectedProvider == undefined ? 
          <h4>Connect your wallet on the Arbitrum Network</h4> : ""}
        </div>
      ) : (
        <>
          <p className="warning" style={{"margin": "20px 0"}}>Warning: high risk of extreme volatility of underlying assets and smart contracts. All contracts have not been formally audited.</p> 
          <hr></hr>
          <div style={{width: "60%", textAlign: "left", margin: "auto", marginTop: "50px"}}>
           
           <p style={{textAlign: "center"}}><b>Check out the Arbi's foodcourt bringing fun new products and forks of faves to Arbitrum!</b></p>
           <img src="/arbis-food-court-v3.png" style={{width: "100%"}}/>
           
           <p><a href="https://zerotwohm.finance">ZeroTwOhm</a> - The first Ohmlike on Arbitrum</p>
           <p><a href="https://Arbicheems.finance">ArbiCheems</a>+CheemsHole - A simple (highly deflationary) meme coin and a winner take all degen gambling game (new Blackhole but now more balanced for all sizes of playes then previous versions)  </p>
           
           
           
            <h3>About</h3>
            <p>See our new documentation: <a href="https://arbisfinance.gitbook.io/food-court/">here</a></p>
          {/*   <p>Arbi’s Finance is the premier autocompounder on the Arbitrum network. Deposit your tokens in our vaults and earn more yield while saving time.</p>
            <h1>FAQ</h1>
            <h2>How does Arbi’s Finance work?</h2>
            <p>Arbi’s Finance auto-compounds yield farming rewards. Users deposit their tokens into vaults. Vaults earn yield in reward tokens, such as $SUSHI, which is then reinvested in the vault, compounding everyone’s vault deposits.</p>
            <h2>What are the fees?</h2>
            <p>Our fees are the tastiest on all of Arbitrum. The default performance fees are 3.5% for our treasury and 0.5% for the compounder. <em>Fees are applied only on the amount being compounded</em>, not TVL. All vaults have at most a 0.1% withdrawal fee.</p>
            <h2>Why should I use Arbi’s Finance?</h2>
            <p>Our protocol saves you time and makes you more money by compounding your position for you.</p>            
            <h2>What is the yield and where does it come from?</h2>
            <p>Vaults receive yield in various tokens depending on the token and farm type. Our service is an auto-compounding service which automates the process of compounding your position to earn you extra yield.</p>
           <h2>What is APY and why is it so high?</h2>
            <p>APY is compounded APR. APR is generally what is shown on a project’s homepage. APY factors in the frequency at which the interest is compounded over a year-long period, resulting in a much higher figure.</p>
           <h2>What are the risks associated?</h2>
            <p>Arbi’s Finance pools come with inherent risks, including but not limited to:</p>
            <ul>
<li>Smart contract risk -- all of our contracts are unaudited and many of the underlying smart contracts from other decentralized applications and projects which our vaults are built on may be unaudited.</li>
<li>Scam or rug-pull risk of deposited tokens -- we are not associated with any of the projects that we list unless stated otherwise. The tokenomics, security practices, and code regarding tokens from projects which we provide products for is outside of our control.</li>
<li>Impermanent loss (in the case of multi-asset liquidity pools) – price variation and divergence of pooled assets leading to losses for liquidity providers.</li>
          </ul> */}
<p>Please use our products responsibility, and never invest more than you can afford to lose. Arbi’s Finance does not guarantee compensation for any of our users in the event of exploits, hacks, and other unforeseeable negative events.</p>
          </div>
        </>
      )}
    </div>
  );
}
