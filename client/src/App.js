
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import LoginForm from "./components/forms/auth/login.form";
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
    this.updateTheme('default')
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

          <AppRoute exact path="/" component={LoginForm} layout={AuthLayout} />
          <AppRoute exact path="/news-feed" component={Home} layout={MainLayout} />
          <AppRoute exact path="/profile" component={Profile} layout={MainLayout} />
        </Router>
    );
  }
}

export default App;

