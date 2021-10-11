
import React, { useState } from "react";
import {
  InputNumber,
  Upload,
  Button,
  List,
  Divider,
  Image,
  Input,
  Card,
  DatePicker,
  Space,
  Slider,
  Switch,
  Progress,
  Select,
} from "antd";
import { Link  } from "react-router-dom";
import axios from "axios";
import { SyncOutlined, UploadOutlined } from "@ant-design/icons";
import { Address, Balance, EtherInput, AddressInput, Hint } from "../components";
import { parseEther, formatEther } from "@ethersproject/units";
import { Alert } from "antd";
import { ipfs, ipfsLinkFromHash, relationToNow, truncateString } from "../helpers";
import { useExternalContractLoader, useContractReader, useBalance } from "../hooks";

import { create as createIPFSClient } from'ipfs-http-client';
import StrategyAbi from "../contracts/Strategy.abi";
import { createSetAccessor } from "typescript";
import RelationToNow from "./RelationToNow";
import ArbiSpinner from "../views/ArbiSpinner";
const ipfsClient = createIPFSClient('https://ipfs.infura.io:5001')
const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;



export default function RaiseTile({
  raiseID,
  provider,
  factoryInstance
}) {
    const [loading, setLoading] = React.useState(false);
    const [loadedData, setLoadedData] = React.useState(false);
  const raiseAddress = useContractReader({ RaiseFactoryFacet: factoryInstance }, "RaiseFactoryFacet", "raises", [BigInt(raiseID)]);
       
  console.log(`loaded address ${raiseAddress} id ${raiseID}`);
  //step 2 create raise instance
  const farmInstance = useExternalContractLoader(provider, raiseAddress, StrategyAbi);
   //step 3 use instance to get data
  const raiseData = useContractReader({ Strategy: farmInstance }, "Strategy", "data", []);
  const raiseName = useContractReader({ Strategy: farmInstance }, "Strategy", "name", []);
  const raiseSymbol = useContractReader({ Strategy: farmInstance }, "Strategy", "symbol", []);
  const raiseEnd = useContractReader({ Strategy: farmInstance }, "Strategy", "endTime", []);
  console.log( `raise data`);
  console.log(raiseData);

  async function loadRaiseData() {
      setLoading(true);
      try {

        var d = await axios.get(raiseData[2]);
        console.log(`axios got data`);
        console.log(d);
        setLoadedData(d.data);
      } catch(e) {
          console.log(e);
      }
    setLoading(false);
  }

  React.useEffect(() => {
      if (raiseData != undefined && !loading) {
          loadRaiseData();
      }
  }, [raiseData]);



  


  return (
    <Card title={raiseName} style={{width: "300", cursor: "pointer"}} onClick={() => {window.location = window.location+"r/"+raiseAddress}}>
        <Hint hint={<span>{`Raise #${raiseID}`}</span>}/>
        <br/>
        {loading ? <ArbiSpinner/> : <div>
        <Image width={300} height={300} src={loadedData.image}/>
        <br/>
        <p>{truncateString(loadedData.description ? loadedData.description : "", 20)}</p>
        </div>}
        <br/>
        <a href={`https://etherscan.io/address/${raiseAddress}`}> <Hint hint={<span>{truncateString(`${raiseAddress}`, 8)}</span>}/></a>
        <hr/>
        {raiseData ? 
        <p><RelationToNow raiseStart={raiseData[4]} raiseEnd={raiseEnd}/> </p>
        : <div></div>
        }
    </Card>
    

    );
}
