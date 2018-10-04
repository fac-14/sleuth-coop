import React from "react";
import { Link, Route } from "react-router-dom";

export default class LandingPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="logo-div">
          <img src="" alt="sleuth logo" />
        </div>
        <h1>Innovation Platform</h1>
        <h2>Showcasing SME innovation for Local Authority Audiences</h2>
        <Link to={"/info"}>
          <button className="large-home-btn">
            I represent an SME
          </button>
        </Link>
        <Link to={"/discover"}>
          <button className="large-home-btn">
            I am in Local Government
          </button>
        </Link>
      </React.Fragment>
    );
  }
}
