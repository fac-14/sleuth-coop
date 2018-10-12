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
  }

  render() {
    if (this.state.loading) {
      return <h3>Loading...</h3>;
    }
    console.log(this.state.response)
    const smes = this.state.response;
    return (
      <div className="discovery-container">
        <HomeBtn />
        <header className="discover-header">
          <h1>Discover</h1>
          <h3>Search for innovative SMEs with proven success.</h3>
        </header>
        <main className="company-container">
          {smes.map((el, index) => {
            return (
              <div key={index} className="company-block">
                <h3>{el.company_name}</h3>
                <p>{el.description}</p>
                <Link to={`profile/${el.id}`} className="profile-link">
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
