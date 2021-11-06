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
import stARBISETHLPAddress from "../contracts/stARBISETHLP.address";



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
            address: StArbisAddress2,
            farmName: "ARBIS",
            earn: "ETH",
        },

        {
            id: "stARBISETH SUSHI LP",
            address: stARBISETHLPAddress,
            farmName: "ARBIS/ETH Sushi LP",
            earn: "Z2O",
            isLP: true,
            specialWarning:<>You can get this LP token on <a href="https://app.sushi.com/add/ETH/0x9f20de1fc9b161b34089cbEAE888168B44b03461">Sushi</a></>
        },

        {
            id: "CHEEMS/ETH",
            name: "CHEEMS/ETH",
            address: CHEEMSETHStrategyAddress,/* zapper is not working
            zapperAddress: ARBISETHSwaprZapperAddress, */
            specialWarning: "",
            hideDeposit: false,
        },


     

       
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
        if (farm == 0 || farm == 1) {
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
                farmName={farms[farm].farmName}
                earn={farms[farm].earn}
                isLP={farms[farm].isLP}
            />
        } else if (farm == 2) {
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
