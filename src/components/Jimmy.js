import React from "react";
import LeftHand from "./LeftHand";
import RightHand from "./RightHand";
import Body from "./body";
import Head from "./head";
import jimmyStyles from '../styles/jimmyStyles.css'

const Jimmy = () => {
  return (
    <div className="jimmy">
      <div className="left-hand">
        <LeftHand />
      </div>
      <div className="head">
        <Head />
      </div>
      <div className="right-hand">
        <RightHand />
      </div>
      <div className="body">
        <Body />
      </div>
    </div>
  );
};

export default Jimmy;
