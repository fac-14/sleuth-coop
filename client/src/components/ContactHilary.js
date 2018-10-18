import React from "react";
import twitterIcon from "../assets/Twitter.svg";
import linkedInIcon from "../assets/Linkedin.svg";
import mediumIcon from "../assets/Medium.svg";

export default class ContactHilary extends React.Component {
  render() {
    return (
      <div className="contact-hilary">
        <div className="heading-banner-contact">
          <h1>Contact Sleuth</h1>
        </div>
        <p>
          We at Sleuth have extensive experience working in and with Local
          Authorities across the UK. As well as showcasing your product on our
          innovation platform, we can offer in-depth advice and assistance on
          building your proposition.
        </p>
        <div id="sleuth-info">
          <div className="contact-section">
            <h2>Contact</h2>
            <ul>
              <li>
                <h4>Email:</h4>
                <p>hello@sleuth.coop</p>
              </li>

              <li>
                <h4>Address:</h4>
                <p>
                  Sleuth Cooperative,
                  <br /> Nye Bevan House, <br /> London, <br /> SW6 7TB, <br />
                  United Kingdom
                </p>
              </li>
            </ul>
          </div>

          <div className="sleuth-link-section">
            <h2>Find us online</h2>

            <a href="www.sleuth.coop" target="_blank" rel="noopener noreferrer">
              www.sleuth.coop
            </a>

            <div className="sleuth-profile-links">
              <a
                href="https://www.linkedin.com/in/hilary-simpson-02395418/?ppe=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedInIcon} alt="linked in" />
              </a>

              <a
                href="https://twitter.com/simpson_hilary?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterIcon} alt="twitter" />
              </a>

              <a
                href="https://medium.com/@hilary.simpson"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={mediumIcon} alt="medium" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
