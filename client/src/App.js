import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./component/Navigation";
import './App.css';
import Landing from './component/Landing';
import SignUp from './component/SignUp';
import SignIn from './component/SignIn';
import Home from './component/Home';

class App extends Component {

  render() {

    return (
      <Router>
        <Navigation />
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
