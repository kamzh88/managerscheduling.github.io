import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./component/Navigation";
import './App.css';

class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <Navigation />
        </div>
      </Router>
    )
  }
}

export default App;
