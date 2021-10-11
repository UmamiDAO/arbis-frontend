import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FARMS, STAKING_POOL_ADDRESSES } from "../constants";
import FarmUI from "./FarmUI";
import FarmNYANETHUI from "./FarmNYANETHUI";

import NyanStrategyAddress from "../contracts/NyanStrategy.address";
import NyanETHStrategyAddress from "../contracts/NyanETHStrategy.address";
import CarbonStrategyAddress from "../contracts/CarbonStrategy.address";
import PongStrategyAddress from "../contracts/PongStrategy.address";
import PonzuStrategyAddress from "../contracts/PonzuStrategy.address";
import ApeStrategyAddress from "../contracts/ApeStrategy.address";
import USDCETHStrategyAddress from "../contracts/USDCETHStrategy.address";
import MIMETHStrategyAddress from "../contracts/MIMETHStrategy.address";
import FarmLPSushiUI from "./FarmLPSushiUI";
import STArbisUI from "./StARBISUI";
import CurveLPStrategyAddress from "../contracts/MagicUSDCStrategy.address";
import MagicUSDCStrategyAddress from "../contracts/MagicUSDCStrategy.address";
import AFARMETHStrategyAddress from "../contracts/AFARMETHStrategy.address";
import ArbiSpinner from "./ArbiSpinner";
import NYANETHStrategy2Address from "../contracts/NYANETHStrategy2.address";
import { Button } from "antd";


export default function FarmInfo({
  nyanETHPrice,
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
  //props{match.params, provider, userSigner, address, tx}
  const farms = [
       
    { id: FARMS.NYAN},
    { id: FARMS.NYANETH2},

  ];
  const [farm, setFarm] = React.useState(farms[0].id);

  function showFarm() {

    switch (farm) {
      case FARMS.NYAN:
        return <FarmUI
          nyanETHPrice={nyanETHPrice}
          address={address}
          userSigner={userSigner}
          provider={localProvider}
          injectedProvider={injectedProvider}
          tx={tx}
          farmAddress={NyanStrategyAddress}
          farmName={"Nyan Strategy"}
          stakingPoolAddress={STAKING_POOL_ADDRESSES.NYAN}
          specialWarning={"♥️ This is Arbi's favorite of the farms we've made so far, the true OGs ❤️"}
        />;
        case FARMS.NYANETH2:
        return <FarmNYANETHUI
          nyanETHPrice={nyanETHPrice}
          address={address}
          userSigner={userSigner}
          provider={localProvider}
          injectedProvider={injectedProvider}
          tx={tx}
          farmAddress={NYANETHStrategy2Address}
          farmName={"Nyan-ETH Strategy 2"}
          stakingPoolAddress={STAKING_POOL_ADDRESSES.NYANETH2}
        />;
      case FARMS.MAGICUSDC:
        return <FarmLPSushiUI
          nyanETHPrice={nyanETHPrice}
          address={address}
          userSigner={userSigner}
          provider={localProvider}
          injectedProvider={injectedProvider}
          tx={tx}
          farmAddress={MagicUSDCStrategyAddress}
          farmName={"MAGIC-USDC Strategy"}
          specialWarning={"🚨🚨 Magic charges a withdraw fee on the farm this strategy uses. See https://magicland.fi/forest for info on the current withdraw fee. Arbi's charges no withdraw fee on this pool.🚨🚨 "}
        />;
      /* case FARMS.AFARMETH:
        return <FarmLPSushiUI
          address={address}
          userSigner={userSigner}
          provider={localProvider}
          injectedProvider={injectedProvider}
          tx={tx}
          farmAddress={AFARMETHStrategyAddress}
          farmName={"AFARM-ETH Strategy"}
        />; */
      default:
        return <div><p>Interface resetting</p><br /><ArbiSpinner /></div>
    }
  }

  function showButtons() {
      return farms.map(e=> {
        return  <Button onClick={()=>{
            setFarm(0);
            setTimeout(function () {
                setFarm(e.id)
              }, 1000);
            }}>
            {e.id}
        </Button>
    })
  }

  return (
    <div>
        <div>
            {showButtons()}
        </div>
       
      {showFarm()}
    </div>
  );
}
