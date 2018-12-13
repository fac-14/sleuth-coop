import React from "react";
import { Link } from "react-router-dom";
import HomeBtn from "./HomeBtn";
// import logo from '../assets/sleuth-logo.png';

export default class LogIn extends React.Component {
  state = {
    email: "",
    password: "",
    errorMsg: false,
    serverError: "",
    allowFetchSubmit: false
  };

  /*
  Possible functions:
    sanitiseInputs() // to remove any "illegal" characters from email and pw inputs
  */

  handleChange = e => {
    const target = e.target;
    const value = target.value;
    this.setState({ [target.name]: value }, () => this.checkIfSubmitAllowed());
  };

  checkIfSubmitAllowed = () => {
    if (this.emailCheck(this.state.email) && this.state.password.length > 3) {
      this.setState({ allowFetchSubmit: true });
    } else {
      this.setState({ allowFetchSubmit: false });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    // clear serverError state before retrying fetch request
    this.setState({ serverError: "" });

    if (this.state.password.length <= 3) {
      this.setState({ errorMsg: "Invalid login information" });
      this.setState({ password: "" });
    } else if (this.state.allowFetchSubmit) {
      const data = JSON.stringify(this.state);

      fetch("/login-check", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: data
      })
        .then(res => {
          return res.json();
        })
        .then(res => {
          // if returning id, user is auth - redirect
          if (typeof res.ok) {
            localStorage.setItem("jwt", res.token);
            return (window.location = `/profile/${res.userId}/sme`);
          } else {
            this.setState({ errorMsg: res });
            this.setState({
              serverError: "Something went wrong on the server. Try again later"
            });
          }
        })
        .catch(err => {
          console.log(err);
        });

      this.setState({
        password: ""
      });
    }
  };

  emailCheck = email => {
    const emailRegex = RegExp(
      "^[0-9a-z]([a-z_\\d\\.-]*)@[a-z\\d]([a-z\\d-]*)\\.([a-z]{2,8})(\\.[a-z]{2,8})?$",
      "i"
    );
    if (emailRegex.test(email.trim())) {
      this.setState({ errorMsg: false });
      return true;
    } else {
      this.setState({ errorMsg: "Invalid email address" });
      return false;
    }
  };

  render() {
    return (
      <React.Fragment>
        <HomeBtn color="dark" />
        <div className="landing-content">
          {/* <div className="logo-div">
          <img src={logo} alt="sleuth logo" />
        </div> */}

          <h1>Log In</h1>
          {/* See if "id="form"" is relevant here */}
          <form id="login-form" onSubmit={this.handleSubmit}>
            <label htmlFor="email">
              <h3>Email Address</h3>
            </label>
            <input
              className="input"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              onBlur={this.checkEmailValid}
              required
              autoComplete="on"
              x-autocompletetype="email"
              autoFocus
            />
            <label htmlFor="password">
              <h3>Password</h3>
            </label>
            <input
              className="input"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              onBlur={this.checkEmailValid}
              type="password"
              required
              autoComplete="on"
              x-autocompletetype="current-password"
            />
            <div
              className={
                this.state.errorMsg || this.state.serverError
                  ? "error"
                  : "hidden"
              }
            >
              {this.state.errorMsg} {this.state.serverError}
            </div>
            <button
              className="large-home-btn2 default-btn"
              type="submit"
              onClick={this.handleSubmit}
            >
              Log In
            </button>
          </form>
          <Link to={"forgot-password"}>
            {/* this will likely become the top left home button... */}
            <button className="large-home-btn2 default-btn">
              forgot password?
            </button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
