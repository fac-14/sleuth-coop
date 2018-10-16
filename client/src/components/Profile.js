import React from "react";

import Contact from "./ProfileComponents/Contact";
import Content from "./ProfileComponents/Content";
import HomeBtn from "./HomeBtn";
import Sidebar from "./ProfileComponents/Sidebar";

import getProfile from "../utils/getProfile";
import filterData from "../utils/filterData";

export default class Profile extends React.Component {
  state = {
    response: null,
    loading: true
  };

  componentDidMount() {
    const profile = this.props.location.pathname;
    getProfile(profile)
      .then(res => {
        const transformed = filterData(res);
        this.setState({
          response: transformed,
          loading: false
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    // destructure the state
    if (this.state.loading) {
      return <h3>Loading...</h3>;
    }

    const { basic_info: basicInfo, answers } = this.state.response;
    return (
      <React.Fragment>
        <HomeBtn />
        <div id="profile-wrapper">
          <Sidebar
            className="Header"
            compName={basicInfo.company_name}
            website={basicInfo.website}
            desc={basicInfo.one_liner}
            answers={answers}
            editable={this.props.SME}
          />
          <div className="profile-content-wrapper">
            <Content answers={answers} about={basicInfo.one_liner} />
            <Contact
              className="contact"
              name={basicInfo.contact_name}
              title={basicInfo.contact_title}
              email={basicInfo.contact_email}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
