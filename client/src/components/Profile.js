import React from "react";
import { Link } from "react-router-dom";

import Header from "./ProfileComponents/Header";
import Contact from "./ProfileComponents/Contact";
import HomeBtn from "./HomeBtn";
import getProfile from "../utils/getProfile";

export default class Profile extends React.Component {
  state = {
    response: null,
    loading: true
  };

  componentDidMount() {
    getProfile(123)
      .then(res =>
        this.setState({
          response: res,
          loading: false
        })
      )
      .catch(err => console.log(err));
  }

  render() {
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
