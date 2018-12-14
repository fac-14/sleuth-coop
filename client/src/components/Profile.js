import React from "react";
import { withRouter } from "react-router-dom";

import Contact from "./ProfileComponents/Contact";
import Content from "./ProfileComponents/Content";
import BackBtn from "./BackBtn";
import Sidebar from "./ProfileComponents/Sidebar";

import getProfile from "../utils/getProfile";
import filterData from "../utils/filterData";

class Profile extends React.Component {
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

  logOut = () => {
    localStorage.removeItem("jwt");

    fetch("/logout", {
      method: "post"
    })
      .then(res => {
        this.props.history.push("/");
        return res.text();
      })
      .then(res2 => console.log(res2))
      .catch(err => console.log(err));
  };

  render() {
    // destructure the state
    if (this.state.loading) {
      return <h3>Loading...</h3>;
    }

    const { basic_info: basicInfo, answers } = this.state.response;
    return (
      <React.Fragment>
        {this.props.SME ? "" : <BackBtn url="/find" />}

        <div id="profile-wrapper">
          {!this.props.SME ? (
            ""
          ) : (
            <button
              className="large-home-btn2 default-btn"
              id="log-in"
              onClick={this.logOut}
            >
              Log Out
            </button>
          )}
          <Sidebar
            className="Header"
            compName={basicInfo.company_name}
            website={basicInfo.website}
            desc={basicInfo.one_liner}
            answers={answers}
            editable={this.props.SME}
            logo={basicInfo.logo_url}
            compId={basicInfo.id}
          />
          <div className="profile-content-wrapper">
            <Contact
              className="contact"
              name={basicInfo.contact_name}
              title={basicInfo.contact_title}
              email={basicInfo.contact_email}
            />
            <Content
              answers={answers}
              about={basicInfo.one_liner}
              compId={basicInfo.id}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Profile = withRouter(Profile);

export default Profile;
