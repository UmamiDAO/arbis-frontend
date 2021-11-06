import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Button } from "antd";
import { FARMS, peggFarms, STAKING_POOL_ADDRESSES } from "../constants";
import FarmUI from "./FarmUI";
import CarbonStrategyAddress from "../contracts/CarbonStrategy.address";
import PongStrategyAddress from "../contracts/PongStrategy.address";
import PonzuStrategyAddress from "../contracts/PonzuStrategy.address";
import ApeStrategyAddress from "../contracts/ApeStrategy.address";
import ArbiSpinner from "./ArbiSpinner";
import Pool1FarmUI from "./Pool1FarmUI";
import NyanETHStakingPoolAddress from "../contracts/NyanETHStakingPool.address";
import FarmNYANETHUI from "./FarmNYANETHUI";
import STArbisUI from "./StARBISUI";
import FarmLPSushiUI from "./FarmLPSushiUI";
import RelatedLPFarms from "./RelatedLPFarms";



export default function LegacyFarms({
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
  farms,

}) {
  //props{match.params, provider, userSigner, address, tx}
  const [farm, setFarm] = React.useState(0);

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
    console.log(`showFarm! ${farm}`);
    console.log("params: ", params);
    if (farm != farms.length) {
      switch (farms[farm].id) {
        case FARMS.NYANETH:
          return <FarmNYANETHUI
            nyanETHPrice={0}
            address={address}
            userSigner={userSigner}
            provider={localProvider}
            injectedProvider={injectedProvider}
            tx={tx}
            farmAddress={farms[farm].farmAddress}
            farmName={farms[farm].farmName}
            stakingPoolAddress={farms[farm].stakingPoolAddress}
          />;
        case FARMS.STARBISOLD:
          return <STArbisUI
            address={address}
            userSigner={userSigner}
            provider={localProvider}
            injectedProvider={injectedProvider}
            tx={tx}
            farmAddress={farms[farm].farmAddress}
            warning={farms[farm].warning}
            hideDeposit={farms[farm].hideDeposit}
          />;
        case FARMS.ARBISETH1:
          return <FarmLPSushiUI
            nyanETHPrice={0}
            address={address}
            userSigner={userSigner}
            provider={localProvider}
            injectedProvider={injectedProvider}
            tx={tx}
            farmAddress={farms[farm].farmAddress}
            farmName={farms[farm].name}
            specialWarning={farms[farm].specialWarning}
            hint={farms[farm].hint}
            hideDeposit={farms[farm].hideDeposit}
            zapperAddress={farms[farm].zapperAddress}
          />;
        case FARMS.ARBISETH2:
          return <FarmLPSushiUI
            nyanETHPrice={0}
            address={address}
            userSigner={userSigner}
            provider={localProvider}
            injectedProvider={injectedProvider}
            tx={tx}
            farmAddress={farms[farm].farmAddress}
            farmName={farms[farm].name}
            specialWarning={farms[farm].specialWarning}
            hint={farms[farm].hint}
            hideDeposit={farms[farm].hideDeposit}
            zapperAddress={farms[farm].zapperAddress}
          />;
        case FARMS.ARBISETH3:
          return <FarmLPSushiUI
            nyanETHPrice={0}
            address={address}
            userSigner={userSigner}
            provider={localProvider}
            injectedProvider={injectedProvider}
            tx={tx}
            farmAddress={farms[farm].farmAddress}
            farmName={farms[farm].name}
            specialWarning={farms[farm].specialWarning}
            hint={farms[farm].hint}
            hideDeposit={farms[farm].hideDeposit}
            zapperAddress={farms[farm].zapperAddress}
          />;
        case FARMS.MIMETH:
          return <FarmLPSushiUI
            nyanETHPrice={0}
            address={address}
            userSigner={userSigner}
            provider={localProvider}
            injectedProvider={injectedProvider}
            tx={tx}
            farmAddress={farms[farm].farmAddress}
            farmName={farms[farm].name}
            specialWarning={farms[farm].specialWarning}
            hint={farms[farm].hint}
            hideDeposit={farms[farm].hideDeposit}
            zapperAddress={farms[farm].zapperAddress}
          />;
        case FARMS.MAGICUSDC:
          return <FarmLPSushiUI
            nyanETHPrice={0}
            address={address}
            userSigner={userSigner}
            provider={localProvider}
            injectedProvider={injectedProvider}
            tx={tx}
            farmAddress={farms[farm].farmAddress}
            farmName={farms[farm].name}
            specialWarning={farms[farm].specialWarning}
            hint={farms[farm].hint}
            hideDeposit={farms[farm].hideDeposit}
            zapperAddress={farms[farm].zapperAddress}
          />;
        case FARMS.HONEYADOGE:
          return <FarmLPSushiUI
            nyanETHPrice={0}
            address={address}
            userSigner={userSigner}
            provider={localProvider}
            injectedProvider={injectedProvider}
            tx={tx}
            farmAddress={farms[farm].farmAddress}
            farmName={farms[farm].name}
            specialWarning={farms[farm].specialWarning}
            hint={farms[farm].hint}
            hideDeposit={farms[farm].hideDeposit}
            zapperAddress={farms[farm].zapperAddress}
          />;
        case FARMS.HONEYETH:
          return <FarmLPSushiUI
            nyanETHPrice={0}
            address={address}
            userSigner={userSigner}
            provider={localProvider}
            injectedProvider={injectedProvider}
            tx={tx}
            farmAddress={farms[farm].farmAddress}
            farmName={farms[farm].name}
            specialWarning={farms[farm].specialWarning}
            hint={farms[farm].hint}
            hideDeposit={farms[farm].hideDeposit}
            zapperAddress={farms[farm].zapperAddress}
          />;
        case FARMS.HONEYUSDC:
          return <FarmLPSushiUI
            nyanETHPrice={0}
            address={address}
            userSigner={userSigner}
            provider={localProvider}
            injectedProvider={injectedProvider}
            tx={tx}
            farmAddress={farms[farm].farmAddress}
            farmName={farms[farm].name}
            specialWarning={farms[farm].specialWarning}
            hint={farms[farm].hint}
            hideDeposit={farms[farm].hideDeposit}
            zapperAddress={farms[farm].zapperAddress}
          />; 
          case FARMS.SPELLETH2:
          return <FarmLPSushiUI
            nyanETHPrice={0}
            address={address}
            userSigner={userSigner}
            provider={localProvider}
            injectedProvider={injectedProvider}
            tx={tx}
            farmAddress={farms[farm].farmAddress}
            farmName={farms[farm].name}
            specialWarning={farms[farm].specialWarning}
            hint={farms[farm].hint}
            hideDeposit={farms[farm].hideDeposit}
            zapperAddress={farms[farm].zapperAddress}
          />;
        case FARMS.SWPRETH:
          return <FarmLPSushiUI
            nyanETHPrice={0}
            address={address}
            userSigner={userSigner}
            provider={localProvider}
            injectedProvider={injectedProvider}
            tx={tx}
            farmAddress={farms[farm].farmAddress}
            farmName={farms[farm].name}
            specialWarning={farms[farm].specialWarning}
            hint={farms[farm].hint}
            hideDeposit={farms[farm].hideDeposit}
            zapperAddress={farms[farm].zapperAddress}
          />; 
          case FARMS.ARBISETH4:
          return <FarmLPSushiUI
            nyanETHPrice={0}
            address={address}
            userSigner={userSigner}
            provider={localProvider}
            injectedProvider={injectedProvider}
            tx={tx}
            farmAddress={farms[farm].farmAddress}
            farmName={farms[farm].name}
            specialWarning={farms[farm].specialWarning}
            hint={farms[farm].hint}
            hideDeposit={farms[farm].hideDeposit}
            zapperAddress={farms[farm].zapperAddress}
          />;
          case FARMS.SPELLETHRewards:
            return <FarmLPSushiUI
              nyanETHPrice={0}
              address={address}
              userSigner={userSigner}
              provider={localProvider}
              injectedProvider={injectedProvider}
              tx={tx}
              farmAddress={farms[farm].farmAddress}
              farmName={farms[farm].name}
              specialWarning={farms[farm].specialWarning}
              hint={farms[farm].hint}
              hideDeposit={farms[farm].hideDeposit}
              zapperAddress={farms[farm].zapperAddress}
            />;
            case FARMS.MIMETHRewards:
              return <FarmLPSushiUI
                nyanETHPrice={0}
                address={address}
                userSigner={userSigner}
                provider={localProvider}
                injectedProvider={injectedProvider}
                tx={tx}
                farmAddress={farms[farm].farmAddress}
                farmName={farms[farm].name}
                specialWarning={farms[farm].specialWarning}
                hint={farms[farm].hint}
                hideDeposit={farms[farm].hideDeposit}
                zapperAddress={farms[farm].zapperAddress}
              />;
        case FARMS.PPEGGFARMS:
          return <RelatedLPFarms
            address={address}
            userSigner={userSigner}
            mainnetProvider={mainnetProvider}
            localProvider={localProvider}
            yourLocalBalance={yourLocalBalance}
            price={price}
            tx={tx}
            injectedProvider={injectedProvider}
            farms={peggFarms}
            pageName={farms[farm].name}
            farmsURL={"https://parrotdefi.com/nests"}
          />;
        default:
          return <FarmUI
            address={address}
            userSigner={userSigner}
            provider={localProvider}
            injectedProvider={injectedProvider}
            tx={tx}
            farmAddress={farms[farm].farmAddress}
            farmName={farms[farm].farmName}
            stakingPoolAddress={farms[farm].stakingPoolAddress}
          />;
      }

    } else {
      return <p>Interface resetting<br /><ArbiSpinner /></p>
    }
  }


  return (
    <div>
      <div>
        <Row style={{ justifyContent: "center", margin: "10px" }}>
          {farms.map((val, id) => {
            return <Button style={farm == id ? { backgroundColor: "#d8121b", color: "white" } : {}} id={val.id} onClick={() => handleSetFarm(id)}>{val.id}</Button>
          })}
        </Row>

      </div>
      {showFarm()}
    </div>
  );
}
