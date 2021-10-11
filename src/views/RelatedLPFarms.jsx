import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Button } from "antd";
import { FARMS, STAKING_POOL_ADDRESSES } from "../constants";
import FarmUI from "./FarmUI";
import CarbonStrategyAddress from "../contracts/CarbonStrategy.address";
import PongStrategyAddress from "../contracts/PongStrategy.address";
import PonzuStrategyAddress from "../contracts/PonzuStrategy.address";
import ApeStrategyAddress from "../contracts/ApeStrategy.address";
import FarmLPSushiUI from "./FarmLPSushiUI";
import ArbiSpinner from "./ArbiSpinner";




export default function RelatedLPFarms({
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
  pageName,
  farmsURL
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
    console.log("showFarm!");
    console.log("params: ", params);
    if (farm != farms.length) {
      return <FarmLPSushiUI
        nyanETHPrice={0}
        address={address}
        userSigner={userSigner}
        provider={localProvider}
        injectedProvider={injectedProvider}
        tx={tx}
        farmAddress={farms[farm].address}
        farmName={farms[farm].name}
      />;
    } else {
      return <p>Interface resetting<br /><ArbiSpinner /></p>
    }
  }

  console.log(`showing farms ${farms} for ${pageName}, current id ${farm}`);
  return (
    <div>
      <h1>{pageName}</h1>
      <p>Learn more about these farms: <a href={farmsURL}>here</a></p>
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
