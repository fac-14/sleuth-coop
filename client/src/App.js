import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Info from './components/Info';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Add from './components/ProfileComponents/Add';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={LandingPage} />
          <Route exact={true} path="/info" component={Info} />
          <Route exact={true} path="/sign-up" component={SignUp} />
          <Route path="/profile/:id" component={Profile} />
          <Route exact={true} path="/profile/:id/add" component={Add} />
        </div>
      </Router>
    );
  }
}

export default App;
