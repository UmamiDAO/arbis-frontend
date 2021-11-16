import React, { useState, useMemo } from "react";
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
import { ImageMap } from '@qiuz/react-image-map';

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
  const [cursor, setCursor] = useState()
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
  const onMapClick = (area, index) => {
    const tip = `click map${index + 1}`;
    if (index == 0) {
      window.open('https://arbicheems.finance');
    }
    else if (index == 1) {
      window.open('https://zerotwohm.finance');

    }
    else {}
    console.log(tip, area);
  }

  // CHEEMSHOLE MAP {"width":"29.01960784313726%","height":"59.50920245398774%","left":"67.99325980392157%","top":"21.472392638036812%"}
  const mapArea = [{"width":"30%","height":"59.8159509202454%","left":"2.306985294117647%","top":"23.92638036809816%",  
    onMouseOver: () => console.log('map onMouseOver1')},
  {"width":"30.58823529411765%","height":"62.26993865030674%","left":"34.46384803921569%","top":"19.938650306748464%",
  onMouseOver: () => {console.log('map onMouseOver2')}}]
  const img = './arbis-food-court-v3.png';
  const ImageMapComponent = React.useMemo(() => <ImageMap className="usage-map" src={img} map={mapArea} onMapClick={onMapClick} />, [mapArea, img]);

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
          <div style={{width: "60%", textAlign: "left", margin: "auto", marginTop: "50px"}}>
            
            <h2>Arbi's Finance</h2>
            <p>Arbi’s Finance is the creator of the Arbi's food court, an ecosystem of burger-themed DeFi projects built on the Arbitrum network.</p>
            <ImageMap
              className="usage-map"
              src={img}
              map={mapArea}
              onMapClick={onMapClick}
              style={{marginBottom: "50px"}}
            />
            
            {/* <img src="/arbis-food-court-v3.png" style={{width: "100%"}}/> */}
            
            <h2>Projects</h2>
            <p><a href="#">Arbi's</a> - Autocompounders for most yield opportunities on Arbitrum. Stake now to maximize yields and save time.</p>
            <p><a href="https://zerotwohm.finance">ZeroTwOhm</a> - The first decentralized reserve currency protocol natively built on the Arbitrum One Network.</p>
            <p><a href="https://arbicheems.finance">ArbiCheems</a> - A simple, highly deflationary, meme coin. Stake your assets and receive the CHEEMS token.</p>
            <p><a href="https://cheemshole.arbicheems.finance">CheemsHole</a> - A winner takes all degen gambling game for CHEEMS, a revised version of Blackhole.</p>
            
            <h2>Documentation</h2>
            <p>You can read more about the food court and our tokenomics in our Gitbook <a href="https://arbisfinance.gitbook.io/food-court/">here</a>.</p>

            <h2>Disclaimer</h2>
            <p>Please use our products responsibility, and never invest more than you can afford to lose. Arbi’s Finance does not guarantee compensation for any of our users in the event of exploits, hacks, and other unforeseeable negative events.</p>
          </div>
          <hr></hr>
          <p className="warning" style={{"margin": "20px 0"}}>Warning: high risk of extreme volatility of underlying assets and smart contracts. All contracts have not been formally audited.</p> 
        </>
      )}
    </div>
  );
}
