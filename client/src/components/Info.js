import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/back-arrow.svg";

export default class Info extends React.Component {
  render() {
    return (
      <div className="intro-content">
        <div className="heading-banner">
          <Link to={"/"}>
            <button className="back-btn">
              <img src={arrow} alt="return to previous" />
            </button>
          </Link>
          <h1>Start Here</h1>
        </div>
        <p>
          Use our comprehensive profile building tools to demonstrate that your
          product works in Local Government.
        </p>
        <Link to={"/sign-up"}>
          <button className="large-home-btn1 default-btn">Start</button>
        </Link>
        <Link to={"/login"}>
          {/* <Link to={"/login"}> */}
          <button className="large-home-btn2 default-btn">
            I already have a profile
          </button>
        </Link>
      </div>
    );
  }
}
