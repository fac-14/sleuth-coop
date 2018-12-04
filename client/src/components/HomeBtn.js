import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/home.svg";

export default class HomeBtn extends React.Component {
  removeJWTandEndSession = () => {
    localStorage.removeItem("jwt");
    fetch("/logout", {
      method: "post"
    })
      .then(res => res.json().then(res => console.log(res)))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Link to={"/"}>
        <button id="home-btn" onClick={this.removeJWTandEndSession}>
          <img src={home} alt="home" />
        </button>
      </Link>
    );
  }
}
