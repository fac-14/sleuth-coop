import React from "react";
import SignUpCard from "./SignUpCard";
// import { Link } from "react-router-dom";

export default class SignUp extends React.Component {

  state = {
    email: "",
    name: "",
    jobtitle: "",
    company: "",
    website: "",
    description: "",
  }

  handleChange = (e) => {
  const target = e.target;
  const value = target.value;
  this.setState({ [target.name]: value })
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

  render() {
    return (
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
    );
  }
}
