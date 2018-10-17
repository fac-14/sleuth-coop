import React from "react";
import { Link } from "react-router-dom";
// import logo from '../assets/sleuth-logo.png';

export default class LogIn extends React.Component {
  state = {
    email: "",
    password: "",
    errorMsg: ""
  };

  handleChange = e => {
    const target = e.target;
    const value = target.value;
    this.setState({ [target.name]: value });
  };

  handleSubmit = e => {
    //incomplete
    e.preventDefault();
    const data = JSON.stringify(this.state);
    console.log("submit!", data);
    fetch("/login-check", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: data
    })
      .then(res => res.json())
      .then(res => {
        if (res) {
          return (window.location = `/profile/${res}/sme`);
        } else {
          console.log("NA AH AH");
        }
      });

    this.setState({
      password: ""
    });
  };

  handleInitialValidation = () => {
    // some sort of form validation here?
    // ensure no weird characters in either form?
    // back-end validation subsequent to this
  };

  sanitiseInputs = () => {
    // this *may* be redundant, depending on handleValidation
    // plan is to remove any "illegal" characters from email and
  };

  handleBackendValidation = () => {
    // is this necessary, or just part of the fetch.then()/catch()?
    // check if email exists
    // check if pw works
    // alert the user of any error
  };

  emailCheck = email => {
    const emailRegex = RegExp(
      "^[0-9a-z]([a-z_\\d\\.-]*)@[a-z\\d]([a-z\\d-]*)\\.([a-z]{2,8})(\\.[a-z]{2,8})?$",
      "i"
    );
    if (emailRegex.test(email.trim())) {
      return true;
    }
    return "Invalid email address";
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
            type="password"
            required
          />
          <button
            className="large-home-btn2 default-btn"
            type="submit"
            onClick={this.handleSubmit}
          >
            Log In
          </button>
        </form>
        <Link to={"/"}>
          <button className="large-home-btn2 default-btn">
            Return to home
          </button>
        </Link>
      </div>
    );
  }
}
