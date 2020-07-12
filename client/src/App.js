import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"

// Page Imports
import Home from "./pages/Home"
import Profile from "./pages/Profile"

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        {/* This is where the pages will render */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>
        {/*  END PAGES*/}
      </Router>
    );
  }
}

export default App;
