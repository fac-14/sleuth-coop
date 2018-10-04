import React from "react";
import SignUpCard from "./SignUpCard";
import { Link } from "react-router-dom";

export default class SignUp extends React.Component {
  render() {
    return (
      <form>
        <SignUpCard name="email" type="email" text="your contact email" />
        <SignUpCard name="full-name" type="text" text="your contact name" />
        <SignUpCard name="comp-name" type="text" text="your company name" />
        <SignUpCard name="comp-site" type="text" text="your company website" />
        <SignUpCard
          name="product-desc"
          type="text"
          text="a short description explaining your product"
        />
        <Link to={"/profile/123"}>
          <button type="submit">Submit</button>
        </Link>
      </form>
    );
  }
}
