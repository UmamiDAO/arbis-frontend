import React, { useState } from "react";
import { formatEther } from "ethers/lib/utils";
import { useExternalContractLoader, useContractReader, useBalance } from "../hooks";
import { useParams } from "react-router-dom";
import { FARMS, STAKING_POOL_ADDRESSES } from "../constants";
import FarmUI from "./FarmUI";
import FarmNYANETHUI from "./FarmNYANETHUI";
import { numberWithCommas } from "../helpers";

import WETHTokenAddress from "../contracts/WETHToken.address";
import ERC20Abi from "../contracts/ERC20.abi";

import NyanTokenAddress from "../contracts/NyanToken.address";
import NyanTokenAbi from "../contracts/NyanToken.abi";

/* arbi's stategies */
import NyanStrategyAddress from "../contracts/NyanStrategy.address";
import NyanStrategyAbi from "../contracts/NyanStrategy.abi";
import NyanETHSushiLPAddress from "../contracts/NyanETHSushiLP.address";
import SushiLPAbi from "../contracts/SushiLP.abi";
import NyanETHStrategyAddress from "../contracts/NyanETHStrategy.address";
import CarbonStrategyAddress from "../contracts/CarbonStrategy.address";
import PongStrategyAddress from "../contracts/PongStrategy.address";
import PonzuStrategyAddress from "../contracts/PonzuStrategy.address";
import ApeStrategyAddress from "../contracts/ApeStrategy.address";
import USDCETHStrategyAddress from "../contracts/USDCETHStrategy.address";


export default function TotalValueLocked({
  ethUSDPrice,
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
  const [loadedRemoteTVL, setLoadedRemoteTVL] = React.useState(false);
  const [remoteTVL, setRemoteTVL] = React.useState("0");

  const wethTokenInstance = useExternalContractLoader(injectedProvider, WETHTokenAddress, ERC20Abi);

  /* NYAN strategy */
  const nyanStrategyInstance = useExternalContractLoader(injectedProvider, NyanStrategyAddress, NyanStrategyAbi);
  const nyanStrategyTotalDeposits = useContractReader({ NyanStrategy: nyanStrategyInstance }, "NyanStrategy", "totalDeposits");

  /* NYAN/ETH strategy */
  const nyanETHStrategyInstance = useExternalContractLoader(injectedProvider, NyanETHStrategyAddress, NyanStrategyAbi); 
  const nyanETHStrategyTotalDeposits = useContractReader({ NYANETHStrategy: nyanETHStrategyInstance }, "NYANETHStrategy", "totalDeposits");
  /* query WETH token contract for LP balance */
  const nyanETHStrategyWethLPBalance = useContractReader({ ERC20: wethTokenInstance }, "ERC20", "balanceOf", [NyanETHSushiLPAddress]);
  /* get sushi lp total supply */
  const nyanETHStrategyLpInstance = useExternalContractLoader(injectedProvider, NyanETHSushiLPAddress, SushiLPAbi); 
  const nyanETHStrategyLpTotalSupply = useContractReader({ SLP: nyanETHStrategyLpInstance }, "SLP", "totalSupply");

  /* Sushi USDC/ETH strategy */
  const usdcETHStrategyInstance = useExternalContractLoader(injectedProvider, USDCETHStrategyAddress, NyanStrategyAbi);
  const usdcETHStrategyTotalDeposits = useContractReader({ USDCETHStrategy: usdcETHStrategyInstance }, "USDCETHStrategy", "totalDeposits");
  /* TODO */

  /* MIM/ETH strategy */
  /* TODO */

  /* MAGIC/USDC strategy */
  /* TODO */


  async function tryGetFullTVL() {
    try {
      const res = await fetch('https://horseysauce.xyz/');
      const data = await res.json();
      console.log(`full tvl data ${data}`);

      setRemoteTVL(data.tvl);
      setLoadedRemoteTVL(true);
    } catch(e) {
      console.log(e);
      console.log(`could not load remote tvl`)
    }
  }

  React.useEffect(() => {
    tryGetFullTVL();

  }, []);

  function tvl() {
    const nyanStrategyTVL = nyanETHPrice * parseFloat(formatEther(nyanStrategyTotalDeposits));
    const nyanETHRatio = parseFloat(formatEther(nyanETHStrategyTotalDeposits)) / parseFloat(formatEther(nyanETHStrategyLpTotalSupply));
    const nyanETHStrategyTVL = nyanETHRatio * parseFloat(formatEther(nyanETHStrategyWethLPBalance)); 
    const total = (nyanStrategyTVL + nyanETHStrategyTVL) * ethUSDPrice;
    return total.toFixed(2);
  } 

  return (
    <div className="total-value-locked">
      Total value staked: 
      {
        (nyanStrategyTotalDeposits && 
          nyanETHStrategyTotalDeposits && nyanETHStrategyWethLPBalance && nyanETHStrategyLpTotalSupply && !isNaN(tvl()) && tvl() > 1) 
          ? 
          (` $${numberWithCommas(loadedRemoteTVL ? remoteTVL : tvl())}+`) 
          : 
          (
            <span className="wave"> 
              &nbsp;$
              <span style={{"--i":1}}>🍔</span>
              <span style={{"--i":2}}>🍔</span>
              <span style={{"--i":3}}>🍔</span>,
              <span style={{"--i":4}}>🍔</span>
              <span style={{"--i":6}}>🍔</span>
              <span style={{"--i":7}}>🍔</span>,
              <span style={{"--i":8}}>🍔</span>
              <span style={{"--i":9}}>🍔</span>
              <span style={{"--i":10}}>🍔</span>
            </span>
          )
      }
    </div>
  );
}
