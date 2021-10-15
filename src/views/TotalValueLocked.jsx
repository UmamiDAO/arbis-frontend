import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { numberWithCommas } from "../helpers";

export default function TotalValueLocked() {
  const [loadedRemoteTVL, setLoadedRemoteTVL] = React.useState(false);
  const [remoteTVL, setRemoteTVL] = React.useState("0");
  const [remotePrice, setRemotePrice] = React.useState("0");

  async function tryGetFullTVL() {
    try {
      const res = await fetch('https://horseysauce.xyz/');
      const data = await res.json();
      console.log(`full tvl data ${data}`);

      setRemoteTVL(data.tvl);
      setRemotePrice(data.arbisPrice);
      setLoadedRemoteTVL(true);
    } catch(e) {
      console.log(e);
      console.log(`could not load remote tvl`)
    }
  }

  React.useEffect(() => {
    tryGetFullTVL();

  }, []);

  return ( <div className="total-value-locked"> { loadedRemoteTVL ? <span>
   
      <span className="tvl-center">Total value staked ${numberWithCommas(remoteTVL)}</span>
      <span className="price-right">${remotePrice}</span>
      
      </span> : 
      
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
