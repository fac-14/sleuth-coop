import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Info from "./components/Info";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class App extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <Router>
        <div>
          <Route exact="true" path="/" component={LandingPage}/>
          <Route exact="true" path="/info" component={Info} />
        </div>
      </Router>
    );
  }
}

export default App;
