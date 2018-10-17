import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/sleuth-logo.png";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-content">
        <div className="logo-div">
          <img src={logo} alt="sleuth logo" />
        </div>
        <h1>This Works</h1>
        <h2 className="landing-text">
          New ways to deliver public services with innovative technologies
        </h2>
        <Link to={"/info"}>
          <button className="default-btn large-home-btn1">
            I represent an SME
          </button>
        </Link>
        <Link to={"/find"}>
          <button className="large-home-btn2 default-btn">
            I am in local government
          </button>
        </Link>
      </div>
    );
  }
}
