import React from 'react';
import { Link } from 'react-router-dom';

export default class Info extends React.Component {
  render() {
    return (
      <div>
        <Link to={'/'}>
          <button>Back</button>
        </Link>
        <h1>Get Started</h1>
        <p>
          Use our marketplace and profille buidling tools to create the perfect
          showcase of your product. With our help, you can maximise engagement
          with Local Government and councils to give you the best chance of
          securing procurement.
        </p>
        <Link to={'/sign-up'}>
          <button>Begin</button>
        </Link>
        <Link to={'/profile/123'}>
          <button>I already have a profile</button>
        </Link>
      </div>
    );
  }
}
