import React from "react";
import { Link } from "react-router-dom";

import home from "../assets/home.svg";

export default class HomeBtn extends React.Component {
  removeCookieAndJWT = () => {
    localStorage.removeItem("jwt");
  };
  render() {
    return (
      <Link to={"/"}>
        <button id="home-btn" onClick={this.removeCookieAndJWT}>
          <img src={home} alt="home" />
        </button>
      </Link>
    );
  }
}
