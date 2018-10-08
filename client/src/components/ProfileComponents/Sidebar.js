import React from "react";

export default class Header extends React.Component {
  render() {
    const { compName, website, desc } = this.props;
    return (
      <div className="header">
        <h1>{compName}</h1>
        <h2>{website}</h2>
        <div id="logo-div">
          <img src="" alt="logo" id="logo-img" />
        </div>
        <ul className="profile-links">
          <li>About</li>
          <li>Product</li>
          <li>Pricing and Legal</li>
          <li>Local Councils</li>
          <li>Demos</li>
          <li>Impact</li>
        </ul>
      </div>
    );
  }
}
