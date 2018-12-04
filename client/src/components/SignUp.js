import React from "react";
import SignUpCard from "./SignUpCard";
import BackBtn from "./BackBtn";

import nextImg from "../assets/next-arrow.svg";
import prevImg from "../assets/prev-arrow.svg";
import formValidation from "../utils/formValidation";

export default class SignUp extends React.Component {
  state = {
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
    jobtitle: "",
    company: "",
    website: "",
    description: "",
    position: 0,
    errorMsg: ""
  };

  handleValidation = () => {
    return formValidation(this.state);
  };

  handleChange = e => {
    const target = e.target;
    const value = target.value;
    this.setState({ [target.name]: value });
  };

  handleBackArrow = () => {
    this.setState({ position: this.state.position - 1 });
  };

  handleFrontArrow = () => {
    if (this.handleValidation() === true) {
      const selector = `#\\3${this.state.position + 1}  .input`;
      if (document.querySelector(selector)) {
        document.querySelector(selector).focus();
      }
      this.setState({ position: this.state.position + 1, errorMsg: "" });
    } else {
      this.setState({ errorMsg: this.handleValidation() });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = JSON.stringify(this.state);
    console.log("sending...", data);
    fetch("/signup", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: data
    })
      // .then(res => console.log("response:", res))
      .then(() => (window.location = "/login"))
      .catch(err => console.log(err));

    this.setState({
      email: "",
      password: "",
      name: "",
      jobtitle: "",
      company: "",
      website: "",
      description: ""
    });
  };
  handleFocus = divID => {
    if (divID === this.state.position) {
      return "form-div focus";
    } else if (divID === this.state.position - 1) {
      return "form-div left";
    } else if (divID === this.state.position + 1) {
      return "form-div right";
    } else if (divID <= this.state.position - 2) {
      return "form-div outer-left";
    } else if (divID >= this.state.position + 2) {
      return "form-div outer-right";
    }
    return "nope";
  };

  handleKey = e => { 
    const key = e.key.toLowerCase();
    if (key === "tab" || key === "enter") {
      e.preventDefault();
      this.handleFrontArrow();
    }
  };
  handleKeyPsdPage = e => { 
    const key = e.key.toLowerCase();
    if(e.target.name === 'passwordConfirm'){ 
      if(key === "tab" || key === "enter") {
        e.preventDefault();
        this.handleFrontArrow();
      }
    }
   
  };


  render() {
    return (
      <React.Fragment>
        <BackBtn url="/info" color="dark" />
        <form id="form" onSubmit={this.handleSubmit}>
          <div id="0" className={this.handleFocus(0)}>
            <SignUpCard
              inputType="input"
              name="email"
              type="email"
              text="your contact email"
              change={this.handleChange}
              value={this.state.email}
              validator={this.handleValidation}
              keyHandler={this.handleKey}
              placeholder="e.g. name@yourcompany.com"
            />
          </div>
          <div id="1" className={this.handleFocus(1)}>
            <SignUpCard
              inputType="passwordconfirm"
              name="password"
              confirmName="passwordConfirm"
              type="password"
              text="your password"
              change={this.handleChange}
              value={this.state.password}
              confirmValue={this.state.passwordConfirm}
              validator={this.handleValidation}
              keyHandler={this.handleKeyPsdPage}
              placeholder="password here"
              confirmPlaceholder="confirm password here"
            />
          </div>
          <div id="2" className={this.handleFocus(2)}>
            <SignUpCard
              inputType="input"
              name="name"
              type="text"
              text="your contact name"
              change={this.handleChange}
              value={this.state.name}
              validator={this.handleValidation}
              keyHandler={this.handleKey}
            />
          </div>
          <div id="3" className={this.handleFocus(3)}>
            <SignUpCard
              inputType="input"
              name="jobtitle"
              type="text"
              text="your job title / role within the company"
              change={this.handleChange}
              value={this.state.jobtitle}
              validator={this.handleValidation}
              keyHandler={this.handleKey}
            />
          </div>
          <div id="4" className={this.handleFocus(4)}>
            <SignUpCard
              inputType="input"
              name="company"
              type="text"
              text="your company name"
              change={this.handleChange}
              value={this.state.company}
              validator={this.handleValidation}
              keyHandler={this.handleKey}
            />
          </div>
          <div id="5" className={this.handleFocus(5)}>
            <SignUpCard
              inputType="input"
              name="website"
              type="text"
              text="your company website"
              change={this.handleChange}
              value={this.state.website}
              validator={this.handleValidation}
              keyHandler={this.handleKey}
            />
          </div>
          <div id="6" className={this.handleFocus(6)}>
            <SignUpCard
              inputType="textarea"
              name="description"
              type="textarea"
              text="a short description explaining the problem your product solves in plain English"
              change={this.handleChange}
              value={this.state.description}
              validator={this.handleValidation}
              keyHandler={this.handleKey}
            />
          </div>
          <div className={this.state.errorMsg ? "error" : "hidden"}>
            {this.state.errorMsg}
          </div>
        </form>
        <input
          className={this.state.position === 0 ? "hidden" : "arrow back-arrow"}
          type="image"
          onClick={this.handleBackArrow}
          src={prevImg}
          alt="back arrow"
        />
        <input
          className={
            this.state.position >= 6 ? "hidden" : "arrow forward-arrow"
          }
          type="image"
          src={nextImg}
          alt="forward arrow"
          onClick={this.handleFrontArrow}
        />
        <button
          className={
            this.state.position < 6 ? "hidden" : "forward-arrow default-btn"
          }
          id="carousel-submit-btn"
          type="submit"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
        <div className="progress-circles-div">
          {[0, 1, 2, 3, 4, 5, 6].map((circle, index) => {
            if (circle === this.state.position) {
              return <div key={index} className="progress-circle filled" />;
            } else {
              return <div key={index} className="progress-circle" />;
            }
          })}
        </div>
      </React.Fragment>
    );
  }
}
