import React from "react";

export default class ProfileHeader extends React.Component {
  render() {
    const { compName, website, desc } = this.props;
    return (
      <div className="header">
        <h1>{compName}</h1>
        <h2>{website}</h2>
        <p>{desc}</p>
      </div>
    );
  }
}
