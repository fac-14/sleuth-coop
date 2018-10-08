import React from "react";
import SignUpCard from "./SignUpCard";
import { Link } from "react-router-dom";
import nextImg from "../assets/next-arrow.svg";
import prevImg from "../assets/prev-arrow.svg";

export default class SignUp extends React.Component {
  state = {
    email: "",
    name: "",
    jobtitle: "",
    company: "",
    website: "",
    description: "",
    position: 0
  };

  handleChange = e => {
    const target = e.target;
    const value = target.value;
    this.setState({ [target.name]: value });
    console.log(this.state);
  };

  handleBackArrow = () => {
    this.setState({ position: this.state.position - 1 });
  };

  handleFrontArrow = () => {
    this.setState({ position: this.state.position + 1 });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = JSON.stringify(this.state);
    // post req will go here (see fetch example below)
    fetch("/signup", {
      method: "post",
      body: data
    });

    this.setState({
      email: "",
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

  render() {
    return (
      <React.Fragment>
        <form id="form" onSubmit={this.handleSubmit}>
          {/* <SignUpCard
            name="email"
            type="email"
            text="your contact email"
            change={this.handleChange}
            value={this.state.email}
          />
          <SignUpCard
            name="name"
            type="text"
            text="your contact name"
            change={this.handleChange}
            value={this.state.name}
          />
          <SignUpCard
            name="jobtitle"
            type="text"
            text="your job title / role within the company"
            change={this.handleChange}
            value={this.state.jobtitle}
          />
          <SignUpCard
            name="company"
            type="text"
            text="your company name"
            change={this.handleChange}
            value={this.state.company}
          />
          <SignUpCard
            name="website"
            type="text"
            text="your company website"
            change={this.handleChange}
            value={this.state.website}
          />
          <SignUpCard
            name="description"
            type="text"
            text="a short description explaining your product"
            change={this.handleChange}
            value={this.state.description}
          /> */}
          <Link to={"/profile/123"}>
            <button type="submit">Submit</button>
          </Link>

          <div id="0" className={this.handleFocus(0)}>
            <SignUpCard
              inputType="input"
              name="email"
              type="email"
              text="your contact email"
              change={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div id="1" className={this.handleFocus(1)}>
            <SignUpCard
              inputType="input"
              name="name"
              type="text"
              text="your contact name"
              change={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div id="2" className={this.handleFocus(2)}>
            <SignUpCard
              inputType="input"
              name="jobtitle"
              type="text"
              text="your job title / role within the company"
              change={this.handleChange}
              value={this.state.jobtitle}
            />
          </div>
          <div id="3" className={this.handleFocus(3)}>
            <SignUpCard
              inputType="input"
              name="company"
              type="text"
              text="your company name"
              change={this.handleChange}
              value={this.state.company}
            />
          </div>
          <div id="4" className={this.handleFocus(4)}>
            <SignUpCard
              inputType="input"
              name="website"
              type="text"
              text="your company website"
              change={this.handleChange}
              value={this.state.website}
            />
          </div>
          <div id="5" className={this.handleFocus(5)}>
            <SignUpCard
              inputType="textarea"
              name="description"
              type="textarea"
              text="a short description explaining your product"
              change={this.handleChange}
              value={this.state.description}
            />
          </div>
        </form>
        <input
          className="arrow back-arrow"
          type="image"
          onClick={this.handleBackArrow}
          src={prevImg}
        />
        <input
          className="arrow forward-arrow"
          type="image"
          src={nextImg}
          alt="next-arrow"
          onClick={this.handleFrontArrow}
        />
      </React.Fragment>
    );
  }
}
