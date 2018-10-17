import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Info from "./components/Info";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Add from "./components/Add";
import Discovery from "./components/Discovery";
import { userInfo } from "os";

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
        <React.Fragment>
          <Route exact={true} path="/" component={LandingPage} />
          <Route exact={true} path="/info" component={Info} />
          <Route exact={true} path="/sign-up" component={SignUp} />
          <Route
            exact={true}
            path="/profile/:id"
            render={props => <Profile {...props} SME={false} />}
          />
          <Route
            exact={true}
            path="/profile/:id/sme"
            render={props =>
              1 === 1 ? (
                <Profile {...props} SME={true} />
              ) : (
                <Redirect
                  to={{ pathname: "/log-in", state: { from: props.location } }}
                />
              )
            }
          />
          <Route
            exact={true}
            path="/profile/:id/add"
            render={props => <Add {...props} />}
          />
          <Route exact={true} path="/discover" component={Discovery} />
          <Route exact={true} path="/log-in" component={Discovery} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
