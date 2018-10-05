import React from "react";
import { Link } from "react-router-dom";

import Header from "./ProfileComponents/Header";
import Contact from "./ProfileComponents/Contact";
import HomeBtn from "./HomeBtn";
import dummyProfile from "../utils/dummyProfileData";

export default class Profile extends React.Component {
  state = {
    response: null,
    loading: true
  };

  componentDidMount() {
    this.populateProfile();
  }

  populateProfile = () => {
    this.setState({
      response: dummyProfile,
      loading: false
    });
    console.log("response", this.state.response);
  };

  render() {
    console.log("response", this.state.response);

    // destructure the state

    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const {
      basic_info: basicInfo,
      product,
      impact,
      ˀimages_demos: assets
    } = this.state.response;

    return (
      <React.Fragment>
        <HomeBtn />
        <Header
          compName={basicInfo.company_name}
          website={basicInfo.website}
          desc={basicInfo.one_liner}
        />
        <Contact
          name={basicInfo.contact_name}
          title={basicInfo.contact_title}
          email={basicInfo.email}
        />
        <Link to="/profile/id/add">
          <button>Add more content</button>
        </Link>
      </React.Fragment>
    );
  }
}
