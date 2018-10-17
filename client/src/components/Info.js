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
          <h1>Get Started</h1>
        </div>
        <p>
          Use our marketplace and profille buidling tools to create the perfect
          showcase of your product. With our help, you can maximise engagement
          with Local Government and councils to give you the best chance of
          securing procurement.
        </p>
        <Link to={"/sign-up"}>
          <button className="large-home-btn1 default-btn">Begin</button>
        </Link>
        <Link to={"/profile/1/sme"}>
          {/* <Link to={"/login"}> */}
          <button className="large-home-btn2 default-btn">
            I already have a profile
          </button>
        </Link>
      </div>
    );
  }
}
