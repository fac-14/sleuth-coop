import React from 'react';
import SignUpCard from './SignUpCard';

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
        <button type="submit">Submit</button>
      </form>
    );
  }
}
