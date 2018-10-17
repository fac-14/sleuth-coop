import React from "react";
import { Link } from "react-router-dom";

import backBtn from "../assets/back-arrow.svg";
import backBtn2 from "../assets/back-arrow-dark.svg";


const BackBtn = ({ url, color }) => {
  return (
    <Link to={url}>
      <button id="back-btn">
      {color ? <img src={backBtn2} alt="return"/>: <img src={backBtn} alt="return" />}
      </button>
    </Link>
  );
};

export default BackBtn;
