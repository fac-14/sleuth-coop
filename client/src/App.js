import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Info from "./components/Info";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Add from "./components/Add";
import Discovery from "./components/Discovery";
import LogIn from "./components/LogIn";

class App extends Component {
  state = {
    response: "",
    isAuthenticated: false,
    loaded: false,
    authId: null
  };

  componentDidMount() {
    this.authenticate();
    // this.unlisten = this.props.history.listen(() => {
    fetch("/auth")
      .then(res => {
        if (res.ok) {
          // this.setState({ loaded: true, isAuthenticated: true });
          console.log("profileId", res);
        } else {
          console.log("error reached");
          if (this.state.isAuthenticated)
            this.setState({ isAuthenticated: false });
        }
      })
      .catch(() => {
        console.log("catch reached");
      });
    // });
  }

  authenticate() {
    fetch("/auth")
      // .then(res => res.json())
      .then(res => {
        this.setState({ loaded: true, isAuthenticated: true });
      })
      .catch(e => console.log(e));
  }

  // checkAuth = async () => {
  //   const response = await fetch("/auth");
  //   const body = await response.json();

  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };

  render() {
    const { loaded, isAuthenticated } = this.state;
    if (!loaded) return null;
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
            render={props => {
              return isAuthenticated ? (
                <Profile {...props} SME={true} />
              ) : (
                <Redirect
                  to={{ pathname: "/login", state: { from: props.location } }}
                />
              );
            }}
          />
          <Route
            exact={true}
            path="/profile/:id/add"
            render={props => <Add {...props} />}
          />
          <Route exact={true} path="/discover" component={Discovery} />
          <Route exact={true} path="/login" component={LogIn} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
