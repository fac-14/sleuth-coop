import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/sleuth-logo.png';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-content">
        <div className="logo-div">
          <img src={logo} alt="sleuth logo" />
        </div>
        <h1>Innovation Platform</h1>
        <h2 className="landing-text">
          Showcasing SME innovation for Local Authority Audiences
        </h2>
        <Link to={'/info'}>
          <button className="default-btn large-home-btn1">
            I represent an SME
          </button>
        </Link>
        <Link to={'/discover'}>
          <button className="large-home-btn2 default-btn">
            I am in Local Government
          </button>
        </Link>
        <Link to={'/login'}>
          <button className="large-home-btn2 default-btn" id="log-in">
            Log In
          </button>
        </Link>
      </div>
    );
  }
}
