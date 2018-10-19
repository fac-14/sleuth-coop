import React from "react";
import { Link } from "react-router-dom";
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
    handleBackendValidation // likely not necessary and implemented as part of the fetch
  */

  handleChange = e => {
    const target = e.target;
    const value = target.value;
    this.setState({ [target.name]: value });
    this.checkIfSubmitAllowed();
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

    // update email error state in case focus not taken off email input field (as checkEmailValid only gets called onBlur)
    // checkEmailValid isn't called on each change because then
    this.checkEmailValid();
    this.checkIfSubmitAllowed();

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
        .then(res => res.json())
        .then(res => {
          // if returning id, user is auth - redirect
          if (typeof res === "number") {
            return (window.location = `/profile/${res}/sme`);
          } else {
            this.setState({ serverError: res });
          }
        })
        .catch(e => console.log(e));

      this.setState({
        password: ""
      });
    }
  };

  checkEmailValid = () => {
    const emailCheckRes = this.emailCheck(this.state.email);

    if (emailCheckRes === true) {
      this.setState({ errorMsg: false });
    } else {
      this.setState({ errorMsg: "Invalid email address" });
    }
  };

  emailCheck = email => {
    const emailRegex = RegExp(
      "^[0-9a-z]([a-z_\\d\\.-]*)@[a-z\\d]([a-z\\d-]*)\\.([a-z]{2,8})(\\.[a-z]{2,8})?$",
      "i"
    );
    if (emailRegex.test(email.trim())) {
      return true;
    }
    return false;
  };

  render() {
    return (
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
          />
          <div
            className={
              this.state.errorMsg || this.state.serverError ? "error" : "hidden"
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
        <Link to={"/"}>
          {/* this will likely become the top left home button... */}
          <button className="large-home-btn2 default-btn">
            Return to home
          </button>
        </Link>
      </div>
    );
  }
}
