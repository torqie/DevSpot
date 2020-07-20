
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import LoginForm from "./components/forms/auth/login.form";
import AppRoute from "./AppRoute";
import AuthRoute from "./AuthRoute";
import MainLayout2 from "./layouts/main2";
import MainLayout from "./layouts/main";
import AuthLayout from "./layouts/auth";
import React from "react";
import axios from "axios";
import './App.css';

const {Component} = require("react");

class App extends Component {
  state = {
    loggedIn: "",
    user: {},
  };

  componentDidMount = async () => {
    await this.checkLoginStatus();
  };

  checkLoginStatus = () => {
    axios
      .get("http://localhost:3001/api/auth/login/success", { withCredentials: true })
      .then(response => {

        if(response.data.success) {
          console.log("Check Login Status: ", response.data.success);
          this.setState({
            loggedIn: true,
            user: response.data.user,
          }, () => {
            this.setTheme(response.data.user.theme)
          });
        } else {
          this.setState({
            loggedIn: false,
          });
        }
      })
      .catch(error => {
        console.log("Check Login Status Error: ", error);
      })
  };

  setTheme = theme => {
    const newTheme = 'theme-' + theme;
    document.body.classList.add(newTheme);
  };

  render() {
    return (
        <Router>
          <AuthRoute exact path="/" component={LoginForm} isLoggedIn={this.state.loggedIn} layout={AuthLayout}  />
          <AppRoute exact path="/news-feed" component={Home} layout={MainLayout2} isLoggedIn={this.state.loggedIn} user={this.state.user} />
          <AppRoute exact path="/profile" component={Profile} layout={MainLayout2} isLoggedIn={this.state.loggedIn} user={this.state.user} />
        </Router>
    );
  }
}

export default App;

