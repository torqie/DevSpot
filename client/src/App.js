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
    theme: 'default'
  };

  componentDidMount() {
    document.body.classList.add('theme-default');
    this.updateTheme('blue')
  }

  updateTheme = theme => {
    const currentTheme = 'theme-'+this.state.theme;
    const newTheme = 'theme-' + theme;
    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);
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

