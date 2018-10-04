import React from "react";
// import { Link } from "react-router-dom";

import ProfileHeader from "./ProfileHeader.js";

export default class Profile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ProfileHeader
          compName="Company Name"
          website="www.website.com"
          desc="A short descriptor"
        />
      </React.Fragment>
    );
  }
}
