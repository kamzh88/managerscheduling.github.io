import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./component/Navigation";
import './App.css';
import Landing from './component/Landing';
import SignUp from './component/SignUp';
import SignIn from './component/SignIn';

class App extends Component {

  render() {

    return (
      <Router>

        <Navigation />
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/SignIn" component={SignIn} />
        </Switch>

      </Router>
    )
  }
}

export default App;
