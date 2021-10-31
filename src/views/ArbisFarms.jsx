import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Button } from "antd";
import { FARMS, STAKING_POOL_ADDRESSES } from "../constants";
import FarmUI from "./FarmUI";
import CarbonStrategyAddress from "../contracts/CarbonStrategy.address";
import PongStrategyAddress from "../contracts/PongStrategy.address";
import PonzuStrategyAddress from "../contracts/PonzuStrategy.address";
import ApeStrategyAddress from "../contracts/ApeStrategy.address";
import STArbisUI from "./StARBISUI";
import ArbiSpinner from "./ArbiSpinner";
import ARBISETHStrategyAddress from "../contracts/ARBISETHStrategy.address";
import FarmLPSushiUI from "./FarmLPSushiUI";
import ARBISETHStrategy2Address from "../contracts/ARBISETHStrategy2.address";
import { Hint } from "../components";
import StArbisAddress from "../contracts/StArbis.address";
import StArbisAddress2 from "../contracts/StArbis2.address";
import ARBISETHStrategy3Address from "../contracts/ARBISETHStrategy3.address";
import ARBISETHStrategy4Address from "../contracts/ARBISETHStrategy4.address";
import ARBISETHSwaprZapperAddress from "../contracts/ARBISETHSwaprZapper.address";
import SPELLETHArbisRewardsAddress from "../contracts/SPELLETHArbisRewards.address";
import MIMETHArbisRewardsAddress from "../contracts/MIMETHArbisRewards.address";
import ARBISETHStrategy5Address from "../contracts/ARBISETHStrategy5.address";
import ARBISETHStrategy6Address from "../contracts/ARBISETHStrategy6.address";
import FarmNYANETHUI from "./FarmNYANETHUI";
import CHEEMSETHStrategyAddress from "../contracts/CHEEMSETHStrategy.address";



export default function ArbisFarms({
    setPurposeEvents,
    address,
    mainnetProvider,
    userSigner,
    localProvider,
    yourLocalBalance,
    price,
    tx,
    writeContracts,
    injectedProvider
}) {
    //props{match.params, provider, userSigner, address, tx}
    const [farm, setFarm] = React.useState(0);
    const farms = [
       
        { 
            id: "stARBIS",
            address: StArbisAddress2 
        },
       
        {
            id: "CHEEMS/ETH",
            name: "CHEEMS/ETH",
            address: CHEEMSETHStrategyAddress,
            specialWarning: "",
            hideDeposit: false,
        },
       
        {
            id: "ARBIS/ETH – Epoch 4 (Active)",
            name: "ARBIS/ETH – Epoch 4 (Active)",
            address: ARBISETHStrategy6Address,
            specialWarning: "",
            hideDeposit: false,
            hint: <>This is the active Swapr autocompounder for Epoch 4. If you don't see your liquidity listed, it has probably expired and must be re-added into this epoch. Check Epoch 3 or in the Legacy Farms tab. For this Epoch 4 LP token, you can acquire it by adding liquidity to Swapr's <a href="https://swapr.eth.link/#/pools/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/0x9f20de1fc9b161b34089cbEAE888168B44b03461/0x986cf605c1d1cAA4Ff60B9aFa2a45F046643d57F?chainId=42161" target="_blank">Pairs / ETH/ARBIS</a> page.</>
        },

        {
            id: "ARBIS/ETH – Epoch 3 (Expired)",
            name: "ARBIS/ETH – Epoch 3 (Expired)",
            address: ARBISETHStrategy5Address,
            specialWarning: "",
            hideDeposit: false,
            hint: <>This is the Swapr autocompounder for Epoch 3. This is now expired and no longer compounding so please remove your LP tokens at Swapr's <a href="https://swapr.eth.link/#/pools/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/0x9f20de1fc9b161b34089cbEAE888168B44b03461?chainId=42161" target="_blank">Pairs / Expired ETH/ARBIS</a> page and re-add the liquidity into Epoch 4.</>
        },

        {
            id: "SPELL/ETH Share Rewards",
            name:  "SPELL/ETH Share Rewards",
            address: SPELLETHArbisRewardsAddress,
            specialWarning: "",
            hint: <>Stake your Arbis SPELL/ETH LP SHARES to earn even more rewards!</>
        },

        {
            id: "MIM/ETH Share Rewards",
            name:  "MIM/ETH Share Rewards",
            address: MIMETHArbisRewardsAddress,
            specialWarning: "",
            hint: <>Stake your Arbis MIM/ETH LP SHARES to earn even more rewards!</>
        }
    ]

    function handleSetFarm(farmid) {
        setFarm(farms.length);
        console.log(`set farm to ${farms.length} ${farm}`);
        setTimeout(function () {
            setFarm(farmid);
            console.log(`set farm to ${farmid} ${farm}`);
        }, 1000);
    }

    function showFarm() {
        const params = useParams();
        console.log("showFarm!");
        console.log("params: ", params);
        if (farm == 0) {
            console.log("show  STArbisUI Farm!");
            return <STArbisUI
                address={address}
                userSigner={userSigner}
                provider={localProvider}
                injectedProvider={injectedProvider}
                tx={tx}
                farmAddress={farms[farm].address}
                warning={farms[farm].specialWarning}
                hideDeposit={farms[farm].hideDeposit}
            />
        } else if (farm == 1) {
           return <FarmNYANETHUI
            nyanETHPrice={0}
            address={address}
            userSigner={userSigner}
            provider={localProvider}
            injectedProvider={injectedProvider}
            tx={tx}
            farmAddress={farms[farm].address}
            farmName={"CHEEMS-ETH Strategy"}
            stakingPoolAddress={STAKING_POOL_ADDRESSES.NYANETH2}
          />;
        } else if (farm != farms.length) {
            return <FarmLPSushiUI
        nyanETHPrice={0}
        address={address}
        userSigner={userSigner}
        provider={localProvider}
        injectedProvider={injectedProvider}
        tx={tx}
        farmAddress={farms[farm].address}
        farmName={farms[farm].name}
        specialWarning={farms[farm].specialWarning}
        hint={farms[farm].hint}
        hideDeposit={farms[farm].hideDeposit}
        zapperAddress={farms[farm].zapperAddress}
      />;
        } else {
            return <p>Interface resetting<br /><ArbiSpinner /></p>
        }
    }


    return (
        <div>
            <div>
                <Row style={{ justifyContent: "center", margin: "10px" }}>
                    {farms.map((val, id) => {
                        return <Button style={farm == id ? { backgroundColor: "#d8121b", color: "white" } : {}} id={val.id} key={val.id} onClick={() => handleSetFarm(id)}>{val.id}</Button>
                    })}
                </Row>

            </div>
            {showFarm()}

        </div>
    );
}
