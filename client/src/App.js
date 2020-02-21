import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./component/Navigation";
import './App.css';
import Landing from './component/Landing';
import SignUp from './component/SignUp';
import SignIn from './component/SignIn';
import Home from './component/Home';
import { fireAuth } from "./component/Firebase";

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
          <Route exact path="/Home" component={Home} />
        </Switch>

      </Router>
    )
  }
}

export default App;
