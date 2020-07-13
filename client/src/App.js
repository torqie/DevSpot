import TopNavbar from "./components/TopNavbar";
import SideNavbar from "./components/SideNavbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AppRoute from "./AppRoute";
import MainLayout from "./layouts/main";
import AuthLayout from "./layouts/auth";
import React from "react";

const {Component} = require("react");

class App extends Component {
  state = {

  };

  render() {
    return (
        <Router>
          <AppRoute exact path="/" component={Home} layout={MainLayout} />
          <AppRoute exact path="/profile" component={Profile} layout={MainLayout} />
        </Router>
    );
  }
}

export default App;

