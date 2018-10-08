import React from "react";
import Header from "./ProfileComponents/Header";
import Contact from "./ProfileComponents/Contact";
import Content from "./ProfileComponents/Content";
import AddContent from "./ProfileComponents/AddContent";
import HomeBtn from "./HomeBtn";
import getProfile from "../utils/getProfile";

export default class Profile extends React.Component {
  state = {
    response: null,
    loading: true,
    edit: true
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
      return <h3>Loading...</h3>;
    }

    const { basic_info: basicInfo, answers } = this.state.response;
    const { edit } = this.state
    return (
      <React.Fragment>
        <HomeBtn />
        <div id="profile-wrapper">
          <Header
            className="Header"
            compName={basicInfo.company_name}
            website={basicInfo.website}
            desc={basicInfo.one_liner}
          />
          <Contact
            className="contact"
            name={basicInfo.contact_name}
            title={basicInfo.contact_title}
            email={basicInfo.email}
          />
          { edit ? <AddContent /> : null }
          <Content answers={answers} />
        </div>
      </React.Fragment>
    );
  }
}
