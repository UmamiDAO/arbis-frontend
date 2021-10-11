import { PageHeader } from "antd";
import React from "react";
import header_styles from "../header.css"

// displays a page header

export default function Header() {
  return (
    <a href="https://arbis.finance" target="_blank" rel="noopener noreferrer" style={{display: "inline-block", float: "left", marginRight: "100%", marginBottom: "3em"}}>
      <PageHeader
        avatar={{
          src:"/logoredesign3clearbackground.png"
        }}
        title=""
        subTitle="We have the yields!"
        style={header_styles}
        className= {header_styles}
      />
    </a>
  );
}
