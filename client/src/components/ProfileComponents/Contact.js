import React from "react";

export default class Contact extends React.Component {
  render() {
    const { name, title, email } = this.props;
    return (
      <div className="contact category">
        <div className="vert-center">
          <h2>Contact Details</h2>
          <div className="profile-block">
            <h3 className="label-text">name</h3>
            <p>{name}</p>
            <h3 className="label-text">title</h3>
            <p>{title}</p>
            <h3 className="label-text">email</h3>
            <p>{email}</p>
          </div>
        </div>
      </div>
    );
  }
}
