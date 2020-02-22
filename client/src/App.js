import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./component/Navigation";
import './App.css';
import Landing from './component/Landing';
import SignUp from './component/SignUp';
import SignIn from './component/SignIn';
import Home from './component/Home';
import AllEmployees from './component/AllEmployees';
import { fireAuth } from "./component/Firebase/index";

class App extends Component {
  state = {
    authUser: null
  }

  componentDidMount() {
    fireAuth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    })
  }

  render() {

    return (
      <Router>
        <Navigation authUser={this.state.authUser} />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route
            exact path="/Home"
            render={props => (<Home authUser={this.state.authUser} {...props} />)}
          />
          <Route exact path="/AllEmployees" component={AllEmployees} />
        </Switch>

      </Router>
    )
  }
}

export default App;
