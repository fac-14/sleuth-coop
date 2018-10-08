import React from "react";

export default class Contact extends React.Component {
  render() {
    const { name, title, email } = this.props;
    return (
      <div className="contact profile-block">
        <h3>Contact Details</h3>
        <p className="label-text">name</p>
        <p>{name}</p>
        <p className="label-text">title</p>
        <p>{title}</p>
        <p className="label-text">email</p>
        <p>{email}</p>
      </div>
    );
  }
}