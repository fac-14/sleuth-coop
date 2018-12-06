import React from "react";
// import {Link } from "react-router-dom";
import HomeBtn from "./HomeBtn";

export default class ResetPassword extends React.Component {
  state = {
    email:"",
    errorMsg: "",
    allowFetchSubmit: false
  }

  handleChange = e => {
    const target = e.target;
    const value = target.value;
    this.setState({ [target.name]: value });
    this.checkIfSubmitAllowed();
  };
  checkIfSubmitAllowed = () => {
    if (this.emailCheck(this.state.email) ) {
      this.setState({ allowFetchSubmit: true });
    } else {
      this.setState({ allowFetchSubmit: false });
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

  
  handleSubmit = (e) => {
    e.preventDefault();
    this.checkEmailValid();
    this.checkIfSubmitAllowed();
    if(this.state.allowFetchSubmit){
      console.log('form submitted');
    }
      
  }

  render() {
    return (
      
      <React.Fragment>
        <HomeBtn color='dark'/>
        <div className="landing-content">
        <h1>Reset Password</h1>

        <form id="reset-password-form" onSubmit={this.handleSubmit}>
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
        submit
        </button>

        </form>
        </div>
        </React.Fragment>
        )
  }
} 
        
