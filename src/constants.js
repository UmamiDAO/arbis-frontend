// MY INFURA_ID, SWAP IN YOURS FROM https://infura.io/dashboard/ethereum
export const INFURA_ID = "460f40a260564ac4a4f4b3fffb032dad";

// MY ETHERSCAN_ID, SWAP IN YOURS FROM https://etherscan.io/myapikey
export const ETHERSCAN_KEY = "PSW8C433Q667DVEX5BCRMGNAH9FSGFZ7Q8";

// BLOCKNATIVE ID FOR Notify.js:
export const BLOCKNATIVE_DAPPID = "0b58206a-f3c0-4701-a62f-73c7243e8c77";

export const NETWORKS = {
  localhost: {
    name: "localhost",
    color: "#666666",
    chainId: 31337,
    blockExplorer: "",
    rpcUrl: "http://" + window.location.hostname + ":8545",
  },
  mainnet: {
    name: "mainnet",
    color: "#ff8b9e",
    chainId: 1,
    rpcUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
    blockExplorer: "https://etherscan.io/",
  },
  kovan: {
    name: "kovan",
    color: "#7003DD",
    chainId: 42,
    rpcUrl: `https://kovan.infura.io/v3/${INFURA_ID}`,
    blockExplorer: "https://kovan.etherscan.io/",
    faucet: "https://gitter.im/kovan-testnet/faucet", // https://faucet.kovan.network/
  },
  rinkeby: {
    name: "rinkeby",
    color: "#e0d068",
    chainId: 4,
    rpcUrl: `https://rinkeby.infura.io/v3/${INFURA_ID}`,
    faucet: "https://faucet.rinkeby.io/",
    blockExplorer: "https://rinkeby.etherscan.io/",
  },
  ropsten: {
    name: "ropsten",
    color: "#F60D09",
    chainId: 3,
    faucet: "https://faucet.ropsten.be/",
    blockExplorer: "https://ropsten.etherscan.io/",
    rpcUrl: `https://ropsten.infura.io/v3/${INFURA_ID}`,
  },
  goerli: {
    name: "goerli",
    color: "#0975F6",
    chainId: 5,
    faucet: "https://goerli-faucet.slock.it/",
    blockExplorer: "https://goerli.etherscan.io/",
    rpcUrl: `https://goerli.infura.io/v3/${INFURA_ID}`,
  },
  xdai: {
    name: "xdai",
    color: "#48a9a6",
    chainId: 100,
    price: 1,
    gasPrice: 1000000000,
    rpcUrl: "https://dai.poa.network",
    faucet: "https://xdai-faucet.top/",
    blockExplorer: "https://blockscout.com/poa/xdai/",
  },
  matic: {
    name: "matic",
    color: "#2bbdf7",
    chainId: 137,
    price: 1,
    gasPrice: 1000000000,
    rpcUrl: "https://rpc-mainnet.maticvigil.com",
    faucet: "https://faucet.matic.network/",
    blockExplorer: "https://explorer-mainnet.maticvigil.com//",
  },
  mumbai: {
    name: "mumbai",
    color: "#92D9FA",
    chainId: 80001,
    price: 1,
    gasPrice: 1000000000,
    rpcUrl: "https://rpc-mumbai.maticvigil.com",
    faucet: "https://faucet.matic.network/",
    blockExplorer: "https://mumbai-explorer.matic.today/",
  },
  localArbitrum: {
    name: "localArbitrum",
    color: "#50a0ea",
    chainId: 153869338190755,
    blockExplorer: "",
    rpcUrl: `http://localhost:8547`,
  },
  localArbitrumL1: {
    name: "localArbitrumL1",
    color: "#50a0ea",
    chainId: 44010,
    blockExplorer: "",
    rpcUrl: `http://localhost:7545`,
  },
  rinkebyArbitrum: {
    name: "Arbitrum Testnet",
    color: "#50a0ea",
    chainId: 421611,
    blockExplorer: "https://rinkeby-explorer.arbitrum.io/#/",
    rpcUrl: `https://rinkeby.arbitrum.io/rpc`,
  },
  arbitrum: {
    name: "Arbitrum",
    color: "#50a0ea",
    chainId: 42161,
    blockExplorer: "https://explorer.arbitrum.io/#/",
    rpcUrl: "https://apis.ankr.com/5b27e1f711684417b9bd26c9e5999f2a/cbdede3b99068ea911a529811788a2b7/arbitrum/full/main",
    gasPrice: 0,
  },
  localOptimismL1: {
    name: "localOptimismL1",
    color: "#f01a37",
    chainId: 31337,
    blockExplorer: "",
    rpcUrl: "http://" + window.location.hostname + ":9545",
  },
  localOptimism: {
    name: "localOptimism",
    color: "#f01a37",
    chainId: 420,
    blockExplorer: "",
    rpcUrl: "http://" + window.location.hostname + ":8545",
    gasPrice: 0,
  },
  kovanOptimism: {
    name: "kovanOptimism",
    color: "#f01a37",
    chainId: 69,
    blockExplorer: "https://kovan-optimistic.etherscan.io/",
    rpcUrl: `https://kovan.optimism.io`,
    gasPrice: 0,
  },
  optimism: {
    name: "optimism",
    color: "#f01a37",
    chainId: 10,
    blockExplorer: "https://optimistic.etherscan.io/",
    rpcUrl: `https://mainnet.optimism.io`,
  },
  localAvalanche: {
    name: "localAvalanche",
    color: "#666666",
    chainId: 43112,
    blockExplorer: "",
    rpcUrl: `http://localhost:9650/ext/bc/C/rpc`,
    gasPrice: 225000000000,
  },
  fujiAvalanche: {
    name: "fujiAvalanche",
    color: "#666666",
    chainId: 43113,
    blockExplorer: "https://cchain.explorer.avax-test.network/",
    rpcUrl: `https://api.avax-test.network/ext/bc/C/rpc`,
    gasPrice: 225000000000,
  },
  mainnetAvalanche: {
    name: "mainnetAvalanche",
    color: "#666666",
    chainId: 43114,
    blockExplorer: "https://cchain.explorer.avax.network/",
    rpcUrl: `https://api.avax.network/ext/bc/C/rpc`,
    gasPrice: 225000000000,
  },
};

export const NETWORK = chainId => {
  for (const n in NETWORKS) {
    if (NETWORKS[n].chainId === chainId) {
      return NETWORKS[n];
    }
  }
};

export const FARMS = Object.freeze({
  NYAN: "nyan",
  NYANETH: "nyan/eth (legacy)",
  NYANETH2: "nyan/eth",
  CARBON: "carbon",
  PONG: "pong",
  PONZU: "ponzu",
  APE: "ape",
  USDCETH: "usdc/eth",
  MIMETH2: "mim/eth",
  SPELLETH: "spell/eth",
  SPELLETH2: "spell/eth2",
  MAGICUSDC: "magicusdc",
  AFARMETH: "afarmeth",
  SWPRETH: "swpr/eth(ended)",
  SWPRETH2: "swpr/eth",
  ARBIS_STAKING: "arbis-staking",
  PPEGG: "ppegg",
  PPEGGETH: "ppegg/eth",
  PPEGGUSDC: "ppegg/usdc",
  PONZI: "PONZI Pool 1",
  MIMETH: "mim/eth (Inactive)",
  STARBISOLD: "stARBIS(Inactive)",
  ARBISETH1: "ARBISETH1(Inactive)",
  ARBISETH2: "ARBISETH2(Inactive)",
  ARBISETH3: "ARBIS/ETH (epoch 2)",
  ARBISETH4: "ARBIS/ETH (epoch 3",
  PPEGGFARMS: "Parrot Defi farms",
  DPX: "Dopex",
  IVORYUSDC: "ivory/usdc",
  TOWERUSDC: "tower/usdc",
  HONEYETH: "honey/eth",
  HONEYUSDC: "honey/usdc",
  HONEYADOGE: "honey/adoge",
  SPELLETHRewards: "SPELL/ETH Share Rewards",
  MIMETHRewards: "MIM/ETH Share Rewards",
  GOHMETH: "gohm/eth",
  MAGICETH: "magic/eth"
});

import NyanStakingPoolAddress from "./contracts/NyanStakingPool.address";
import NyanETHStakingPoolAddress from "./contracts/NyanETHStakingPool.address";
import CarbonStakingPoolAddress from "./contracts/CarbonStakingPool.address";
import CarbonStrategyAddress from "./contracts/CarbonStrategy.address";
import PongStakingPoolAddress from "./contracts/PongStakingPool.address";
import PongStrategyAddress from "./contracts/PongStrategy.address";
import PonzuStakingPoolAddress from "./contracts/PonzuStakingPool.address";
import ApeStakingPoolAddress from "./contracts/ApeStakingPool.address";
import USDCETHStrategyAddress from "./contracts/USDCETHStrategy.address";
import MIMETHStrategyAddress from "./contracts/MIMETHStrategy.address";
import MIMETHStrategy2Address from "./contracts/MIMETHStrategy2.address";
import SPELLETHStrategyAddress from "./contracts/SPELLETHStrategy.address";
import SWPRETHStrategyAddress from "./contracts/SWPRETHStrategy.address";
import ApeStrategyAddress from "./contracts/ApeStrategy.address";
import PEGGStrategyAddress from "./contracts/PEGGStrategy.address";
import PPEGGETHStrategyAddress from "./contracts/PPEGGETHStrategy.address";
import PPEGGUSDCStrategyAddress from "./contracts/PPEGGUSDCStrategy.address";
import NyanETHStrategyAddress from "./contracts/NyanETHStrategy.address";
import StArbisAddress from "./contracts/StArbis.address";
import ARBISETHStrategy2Address from "./contracts/ARBISETHStrategy2.address";
import ARBISETHStrategy3Address from "./contracts/ARBISETHStrategy3.address";
import MagicUSDCStrategyAddress from "./contracts/MagicUSDCStrategy.address";
import SWPRETHStrategy2Address from "./contracts/SWPRETHStrategy2.address";
import DPXStrategyAddress from "./contracts/DPXStrategy.address";
import MaticTOWERUSDCStrategy from "./contracts/MaticTOWERUSDCStrategy.address";
import MaticIVORYUSDCStrategyAddress from "./contracts/MaticIVORYUSDCStrategy.address";
import ARBISETHStrategy4Address from "./contracts/ARBISETHStrategy4.address";
import SWPRETHStrategy3Address from "./contracts/SWPRETHStrategy3.address";
import HONEYETHStrategyAddress from "./contracts/HONEYETHStrategy.address";
import HoneyUSDCStrategyAddress from "./contracts/HoneyUSDCStrategy.address";
import HONEYADOGEStrategyAddress from "./contracts/HONEYADOGEStrategy.address";
import SPELLETHStrategy2Address from "./contracts/SPELLETHStrategy2.address";
import ARBISETHStrategy5Address from "./contracts/ARBISETHStrategy5.address";
import ARBISETHStrategy6Address from "./contracts/ARBISETHStrategy6.address";
import SPELLETHArbisRewardsAddress from "./contracts/SPELLETHArbisRewards.address";
import MIMETHArbisRewardsAddress from "./contracts/MIMETHArbisRewards.address";
import GOHMETHSTRATEGYAddress from "./contracts/GOHMETHSTRATEGY.address";
import MAGICETHSTRATEGYAddress from "./contracts/MAGICETHStrategy.address";

export const STAKING_POOL_ADDRESSES = Object.freeze({
  NYAN: NyanStakingPoolAddress,
  NYANETH: NyanETHStakingPoolAddress,
  CARBON: CarbonStakingPoolAddress,
  PONG: PongStakingPoolAddress,
  PONZU: PonzuStakingPoolAddress,
  APE: ApeStakingPoolAddress
});

export const dopexFarms = [
  {
    id: FARMS.DPX,
    name: "Dopex Strategy",
    address: DPXStrategyAddress,
  },
]

export const swaprFarms = [

  {
    id: FARMS.SWPRETH2,
    name: "SWPR-ETH Strategy Epoch 3",
    address: SWPRETHStrategy3Address
  },
    
  {
    id: "ARBIS/ETH (epoch 4)(new)",
    name: "ARBIS/ETH (epoch 4)(new)",
    address: ARBISETHStrategy6Address,/* zapper is not working
    zapperAddress: ARBISETHSwaprZapperAddress, */
    specialWarning: "",
    hideDeposit: false,
    hint: <>This is the autocompounder for Epoch 4. If you dont see your liquidity its probably in the old one which is now in Legacy Farms tab. you can manually get the LP token on: <a href="https://swapr.eth.link/#/add/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/0x9f20de1fc9b161b34089cbeae888168b44b03461?chainId=42161">Swapr</a></>
},
]

export const peggFarms = [
  {
    id: FARMS.PPEGG,
    name: "PPEGG Strategy",
    address: PEGGStrategyAddress
  },
  {
    id: FARMS.PPEGGETH,
    name: "PPEGG/ETH Strategy",
    address: PPEGGETHStrategyAddress
  },
  {
    id: FARMS.PPEGGUSDC,
    name: "PPEGG/USDC Strategy",
    address: PPEGGUSDCStrategyAddress
  },
]

export const sushiFarms = [
  {
    id: FARMS.USDCETH,
    name: "USDC-ETH Strategy",
    address: USDCETHStrategyAddress
  }, {
    id: FARMS.MIMETH2,
    name: "MIM-ETH Strategy2",
    address: MIMETHStrategy2Address,
    specialWarning: "Users Compounding this farm only earn SUSHI and does not earn SPELL. SPELL is recompounded for depositors"
  },
  {
    id: FARMS.SPELLETH,
    name: "SPELL-ETH Strategy",
    address: SPELLETHStrategyAddress
  },
  {
    id: FARMS.GOHMETH,
    name: "gOHM-ETH Strategy",
    address: GOHMETHSTRATEGYAddress
  },
  {
    id: FARMS.MAGICETH,
    name: "MAGIC-ETH Strategy",
    address: MAGICETHSTRATEGYAddress
  }

]

export const honeyFarms = [
  {
    id: FARMS.HONEYETH,
    name: "HONEY-ETH Strategy",
    address: HONEYETHStrategyAddress
  },
  {
    id: FARMS.HONEYUSDC,
    name: "HONEY-USDC Strategy",
    address: HoneyUSDCStrategyAddress
  },
  {
    id: FARMS.HONEYADOGE,
    name: "HONEY-ADOGE",
    address: HONEYADOGEStrategyAddress
  }
]

export const towerFarms = [
  {
    id: FARMS.TOWERUSDC,
    name: "TOWER-USDC Strategy",
    address: MaticTOWERUSDCStrategy,
    specialWarning: "This Farm only works on the matic/polygon network"
  }, {
    id: FARMS.IVORYUSDC,
    name: "IVORY-USDC Strategy",
    address: MaticIVORYUSDCStrategyAddress,
    specialWarning: "This Farm only works on the matic/polygon network"
  },

]
export const legacyFarms = [
  {
    id: FARMS.CARBON,
    name: "Carbon Strategy",
    farmAddress: CarbonStrategyAddress,
    stakingPoolAddress: STAKING_POOL_ADDRESSES.CARBON,
    specialWarning: ""
  },
  {
    id: FARMS.PONG,
    name: "Pong Strategy",
    farmAddress: PongStrategyAddress,
    stakingPoolAddress: STAKING_POOL_ADDRESSES.PONG,
    specialWarning: "🛑Alert: it has come to our attention the dev has pulled liquidity for this project. Exercise EXTREME CAUTION🛑"
  },
  {
    id: FARMS.PONZU,
    name: "Ponzu Strategy",
    farmAddress: PongStrategyAddress,
    stakingPoolAddress: STAKING_POOL_ADDRESSES.PONZU,
    specialWarning: ""
  },
  {
    id: FARMS.APE,
    name: "ArbiApe Strategy",
    farmAddress: ApeStrategyAddress,
    stakingPoolAddress: STAKING_POOL_ADDRESSES.APE,
    specialWarning: "🛑Alert: it has come to our attention the dev has pulled liquidity for this project. Exercise EXTREME CAUTION🛑"
  },
  {
    id: FARMS.NYANETH,
    name: "NYAN/ETH (inactive)",
    farmAddress: NyanETHStrategyAddress,
    specialWarning: "this pool is inactive, pls migrate to new one in NYAN tab to continue compounding",
    stakingPoolAddress: STAKING_POOL_ADDRESSES.NYANETH
  },
  {
    id: FARMS.STARBISOLD,
    farmAddress: StArbisAddress,
    specialWarning: <>
      <h4 style={{ color: "red" }}>Please withdraw your ARBIS from this fund and re-stake in the new contract. This is to fix a issue with distributing ETH. While in this pool you will earn no rewards</h4>
      <p>Withdraw fees have been disabled on this pool</p>
    </>,
    hideDeposit: true

  },
  {
    id: FARMS.ARBISETH1,
    name: "ARBIS/ETH older",
    farmAddress: ARBISETHStrategy2Address,
    specialWarning: "",
    hideDeposit: true,
    hint: <>Get this LP token on <a href="https://swapr.eth.link/#/add/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/0x9f20de1fc9b161b34089cbeae888168b44b03461?chainId=42161">Swapr</a></>
  },

  {
    id: FARMS.ARBISETH2,
    name: "ARBIS/ETH old",
    farmAddress: ARBISETHStrategy3Address,
    specialWarning: "The Farm for this pool has ended",
    hideDeposit: true,
    hint: <>Get this LP token on <a href="https://swapr.eth.link/#/add/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/0x9f20de1fc9b161b34089cbeae888168b44b03461?chainId=42161">Swapr</a></>
  },
  ,

  {
    id: FARMS.ARBISETH3,
    name: "ARBIS/ETH (epoch 2)",
    farmAddress: ARBISETHStrategy4Address,
    specialWarning: "The Farm for this pool has ended",
    hideDeposit: true,
    hint: <>Get this LP token on <a href="https://swapr.eth.link/#/add/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/0x9f20de1fc9b161b34089cbeae888168b44b03461?chainId=42161">Swapr</a></>
  },
  {
    id: FARMS.MIMETH,
    name: "MIM-ETH Strategy(inactive)",
    address: MIMETHStrategyAddress
  },
  {
    id: FARMS.MAGICUSDC,
    name: "MAGIC-USDC Strategy",
    farmAddress: MagicUSDCStrategyAddress,
    specialWarning: "🚨🚨 Magic charges a withdraw fee on the farm this strategy uses. See https://magicland.fi/forest for info on the current withdraw fee. Arbi's charges no withdraw fee on this pool.🚨🚨 "

  },
  {
    id: FARMS.PPEGGFARMS,
    name: "Pegg Farms"
  },
  {
    id: FARMS.HONEYETH,
    name: "HONEY-ETH Strategy",
    farmAddress: HONEYETHStrategyAddress
  },
  {
    id: FARMS.HONEYUSDC,
    name: "HONEY-USDC Strategy",
    farmAddress: HoneyUSDCStrategyAddress
  },
  {
    id: FARMS.HONEYADOGE,
    name: "HONEY-ADOGE",
    farmAddress: HONEYADOGEStrategyAddress
  },
  {
    id: FARMS.SPELLETH2,
    name: "SPELL-ETH Strategy",
    farmAddress: SPELLETHStrategy2Address
  }, {
    id: FARMS.SWPRETH,
    name: "SWPR-ETH Strategy",
    farmAddress: SWPRETHStrategyAddress,
    specialWarning: "This farm is now complete, migrate to the new one to continue earning rewards"
  },
  {
    id: FARMS.SWPRETH,
    name: "SWPR-ETH Strategy Epoch 2",
    farmAddress: SWPRETHStrategy2Address
  },
  {
    id: FARMS.ARBISETH4,
    name: "ARBIS/ETH (epoch 3)(old)",
    farmAddress: ARBISETHStrategy5Address,/* zapper is not working
    zapperAddress: ARBISETHSwaprZapperAddress, */
    specialWarning: "",
    hideDeposit: false,
    hint: <>This is the autocompounder for Epoch 3. If you dont see your liquidity its probably in the old one which is now in Legacy Farms tab. you can manually get the LP token on: <a href="https://swapr.eth.link/#/add/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/0x9f20de1fc9b161b34089cbeae888168b44b03461?chainId=42161">Swapr</a></>
},

{
  id: FARMS.SPELLETHRewards,
  name: "SPELL/ETH Share Rewards",
  farmAddress: SPELLETHArbisRewardsAddress,
  specialWarning: "",
  hint: <>Stake your Arbis SPELL/ETH LP SHARES to earn even more rewards!</>
},

{
  id: FARMS.MIMETHRewards,
  name: "MIM/ETH Share Rewards",
  farmAddress: MIMETHArbisRewardsAddress,
  specialWarning: "",
  hint: <>Stake your Arbis MIM/ETH LP SHARES to earn even more rewards!</>
}
]
