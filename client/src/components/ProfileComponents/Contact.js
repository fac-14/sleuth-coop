import React from "react";

export default class Contact extends React.Component {
  render() {
    const { name, title, email } = this.props;
    return (
      <div className="contact">
        <h2>Contact Details</h2>
        <p>name</p>
        <p>{name}</p>
        <p>title</p>
        <p>{title}</p>
        <p>email</p>
        <p>{email}</p>
      </div>
    );
  }
}