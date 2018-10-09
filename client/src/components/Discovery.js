import React from "react";
import HomeBtn from "./HomeBtn";
import getSmes from "../utils/getSMEs";
import { Link } from "react-router-dom";

export default class Discovery extends React.Component {
  state = {
    response: null,
    loading: true
  };

  componentDidMount() {
    getSmes()
      .then(res => this.setState({ response: res, loading: false }))
      .catch(err => console.log(err));
    // fetch all SMEs (1. Name 2. Logo 3. Description 4. Link to profile (ID))
    // set state putting this info into the response
  }

  render() {
    if (this.state.loading) {
      return <h3>Loading...</h3>;
    }
    const smes = this.state.response;
    return (
      <div class="discovery-container">
        <HomeBtn />
        <header class="discover-header">
          <h1>Discover</h1>
          <h3>Search for innovative SMEs with proven success.</h3>
        </header>
        <main class="company-container">
          {smes.map((el, index) => {
            return (
              <div key={index} className="company-block">
                <h3>{el.company_name}</h3>
                <p>{el.description}</p>
                <Link to={`profile/${el.user_id}`} className="profile-link">
                  Find out more
                </Link>
              </div>
            );
          })}
        </main>
      </div>
    );
  }
}
