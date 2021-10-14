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
       
        { id: "stARBIS",
        farmAddress: StArbisAddress2 },
       
        

       
        {
            id: "ARBIS/ETH (epoch 3)",
            name: "ARBIS/ETH (epoch 3)",
            address: ARBISETHStrategy5Address,/* zapper is not working
            zapperAddress: ARBISETHSwaprZapperAddress, */
            specialWarning: "",
            hideDeposit: false,
            hint: <>This is the autocompounder for Epoch 3. If you dont see your liquidity its probably in the old one which is now in Legacy Farms tab. you can manually get the LP token on: <a href="https://swapr.eth.link/#/add/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/0x9f20de1fc9b161b34089cbeae888168b44b03461?chainId=42161">Swapr</a></>
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
       /*  {
            id: "ARBIS/ETH (OLD)",
            name: "ARBIS/ETH (OLD, Do not deposit into this)",
            address: ARBISETHStrategyAddress,
            specialWarning: "",
            hideDeposit: true,
            hint: <>Get this LP token on <a href="https://swapr.eth.link/#/add/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/0x9f20de1fc9b161b34089cbeae888168b44b03461?chainId=42161">Swapr</a>
            <br/>
            Please withdraw your ARBIS from this fund and re-stake in the new contract
            </>
        }, */
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
                farmAddress={farms[farm].farmAddress}
                warning={farms[farm].specialWarning}
                hideDeposit={farms[farm].hideDeposit}
            />
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
