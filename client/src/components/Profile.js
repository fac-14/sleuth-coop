import React from "react";
import { Link } from "react-router-dom";

import Header from "./ProfileComponents/Header";
import Contact from "./ProfileComponents/Contact";
import HomeBtn from "./HomeBtn";

export default class Profile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HomeBtn />
        <Header
          compName="Company Name"
          website="www.website.com"
          desc="A short descriptor"
        />
        <Contact
          name="Jessie Beech"
          title="Head of Fun"
          email="jessie@cool.com"
        />
        <Link to="/profile/id/add">
          <button>Add more content</button>
        </Link>
      </React.Fragment>
    );
  }
}
