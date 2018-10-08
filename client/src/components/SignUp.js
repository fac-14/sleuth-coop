import React from "react";
import SignUpCard from "./SignUpCard";
import { Link } from "react-router-dom";

export default class SignUp extends React.Component {

  state = {
    email: "",
    name: "",
    jobtitle: "",
    company: "",
    website: "",
    description: "",
    position: 0,
  }

  handleChange = (e) => {
  const target = e.target;
  const value = target.value;
  this.setState({ [target.name]: value })
  }

  handleBackArrow = () => {
    this.setState({position: this.state.position - 1})
    console.log("go back")
  }

  handleFrontArrow = () => {
    this.setState({position: this.state.position + 1})
    console.log(this.state.position)
    console.log("go fwd")
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.stringify(this.state)
    // post req will go here (see fetch example below)
    fetch('/signup', {
      method: 'post',
      body: data,
    })

    this.setState({
      email: "",
      name: "",
      jobtitle: "",
      company: "",
      website: "",
      description: "",
    })
  }

  handleFocus = (divID) => {
    if(divID === this.state.position){
      return "form-div focus";
    } else if (divID === this.state.position - 1){
      return "form-div left"
    } else if (divID === this.state.position + 1){
      return "form-div right"
    } else if (divID <= this.state.position - 2){
      return "form-div outer-left"
    } else if (divID >= this.state.position + 2){
      return "form-div outer-right"
    }
    return "nope";
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <SignUpCard name="email" type="email" text="your contact email" change={this.handleChange} value={this.state.email} />
          <SignUpCard name="name" type="text" text="your contact name" change={this.handleChange} value={this.state.name}/>
          <SignUpCard name="jobtitle" type="text" text="your job title / role within the company" change={this.handleChange} value={this.state.jobtitle}/>
          <SignUpCard name="company" type="text" text="your company name" change={this.handleChange} value={this.state.company} />
          <SignUpCard name="website" type="text" text="your company website" change={this.handleChange} value={this.state.website} />
          <SignUpCard
            name="description"
            type="text"
            text="a short description explaining your product"
            change={this.handleChange}
            value={this.state.description}
          />
          {/* <Link to={"/profile/123"}> */}
            <button type="submit">Submit</button>
          {/* </Link> */}
        </form>
        <div id="form">
        <div id="0" className={this.handleFocus(0)}>1</div>
        <div id="1" className={this.handleFocus(1)}>2</div>
        <div id="2" className={this.handleFocus(2)}>3</div>
        <div id="3" className={this.handleFocus(3)}>4</div>
        <div id="4" className={this.handleFocus(4)}>5</div>
        <div id="5" className={this.handleFocus(5)}>6</div>
        </div>
        <button className="back-arrow" onClick={this.handleBackArrow}>BACK</button>
        <button className="forward-arrow" onClick={this.handleFrontArrow}>FORWARD</button>
      </React.Fragment>
    );
  }
}
