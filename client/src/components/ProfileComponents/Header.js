import React from "react";

export default class Header extends React.Component {
  render() {
    const { compName, website, desc } = this.props;
    return (
      <div className="header">
        <div id="logo-div">
          <img src="" alt="logo" id="logo-img" />
        </div>
        <div className="info-container">
          <h1>{compName}</h1>
          <h2>{website}</h2>
          <p>{desc}</p>
        </div>
      </div>
    );
  }
}
