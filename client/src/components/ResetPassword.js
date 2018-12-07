import React from "react";
// import {Link } from "react-router-dom";
import HomeBtn from "./HomeBtn";

export default class ResetPassword extends React.Component {
  state = {
    password: "",
    confirmPassword: "",
    errorMsg: "",
    allowFetchSubmit: false,
    token: ""
  }

  handleChange = e => {
    const target = e.target;
    const value = target.value; 
    this.setState({ [target.name]: value }); //console.log('email=',this.state.email) //This console log runs one step before the setState
    //happens so I will see my earlier(one step before) input in this console log 
    // this.checkIfSubmitAllowed();
  };
 
 

  handleSubmit = (e) => {
    e.preventDefault();
  
    if (this.state.allowFetchSubmit) {
    const url = window.location.href;
    const token = url.split('reset/')[1]
    console.log('token=',token)
    this.setState({token:token});
    // {
      const data = JSON.stringify(this.state)
      fetch("/reset", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: data
      }).then(res => {
        console.log('form submitted');
        console.log("data here=", res)
        return res.text()
      })
        .then((res2) => {
          console.log("res2=",res2)
          this.setState({ errorMsg: res2 })
        })
        .catch(err => console.log('err=', err));
      
    }
  }

  handleKey = e => { 
    this.setState({allowFetchSubmit: false});
    const key = e.key.toLowerCase();
    const password = this.state.password;
    const confirmPassword = this.state.confirmPassword;

    if( (password !== "") && (confirmPassword !== "")) {
      if ((key === "tab" || key === "enter" ) ) {
        if(password !== confirmPassword){
          e.preventDefault();
          this.setState({errorMsg:"Passwords do not match"})
        }
      } else {
        this.setState({errorMsg:""})
      }
    }
    else if ((key === "tab" || key === "enter" ) ) {
      if(this.state.password.length <= 3){
        e.preventDefault();
        this.setState({errorMsg:"Password is too short"})
      } else{      
          this.setState({errorMsg:""})
      }
    }
    else {
      this.setState({errorMsg:""})
    }

    if( ((password !== "") && (confirmPassword !== "")) &&
        ((password.length >3) && (confirmPassword.length >3)) 
    ){
    this.setState({allowFetchSubmit: true});
      }
    };

  render() {
    return (

      <React.Fragment>
        <HomeBtn color='dark' />
        <div className="landing-content">
          <h1>Reset Password</h1>

          <form id="reset-password-form" onSubmit={this.handleSubmit}>
            <label htmlFor="password">
              <h3>new password</h3>
            </label>
            <input
              className="input"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              onKeyDown={this.handleKey}
              required
            />
            <label htmlFor="confirmPassword">
              <h3>confirm new password</h3>
            </label>
            <input
              className="input"
              name="confirmPassword"
              value={this.state.confirmPassword}
              type="password"
              onChange={this.handleChange}
              onKeyDown={this.handleKey}
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
              submit
        </button>

          </form>
        </div>
      </React.Fragment>
    )
  }
}

