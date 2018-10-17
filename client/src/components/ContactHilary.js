import React from "react";
import BackBtn from "./BackBtn";
import twitterIcon from "../Twitter";

import { Link } from "react-router-dom";

export default class ContactHilary extends React.Component {
  render() {
    return (
      <div className="intro-content">
        <div className="heading-banner">
          <BackBtn url="/profile/1/sme/add" />
          <h1>Contact Sleuth</h1>
        </div>
        <p>
          We at Sleuth have extensive experience working in and with Local
          Authorities across the UK. As well as showcasing your product on our
          innovation platform, we can offer in-depth advice and assistance on
          building your proposition.
        </p>
        <div>
          <h2>Contact</h2>
          <ul>
            <li>
              <h3>Email:</h3>
              <p>hello@sleuth.coop</p>
            </li>
            <li>
              <h3>Address:</h3>
              <p>
                Sleuth Cooperative, Nye Bevan House, London, SW6 7TB, United
                Kingdom
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h2>Find us online</h2>
          <ul>
            <li>
              <h3>Website:</h3>
              <p>www.sleuth.coop</p>
            </li>
            <li>
              <a
                href="https://twitter.com/simpson_hilary?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterIcon} alt="twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
