
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import LoginPage from "./pages/Login";
import AppRoute from "./AppRoute";
import AuthRoute from "./AuthRoute";
import MainLayout2 from "./layouts/main2";
import AuthLayout from "./layouts/auth";
import React from "react";
import axios from "axios";
import './App.less';

const {Component} = require("react");

class App extends Component {
  state = {
    loggedIn: false,
    user: {},
  };

  componentDidMount = () => {
    const localLoggedIn = localStorage.getItem('loggedIn');
    const localUserId = localStorage.getItem('userId');
    if(JSON.parse(localLoggedIn) === false || localLoggedIn === null || localUserId === null) {
      this.checkLoginStatus();
    } else {
      axios
        .get(`/api/users/${localUserId}`)
        .then(response => {
          this.setState({
            loggedIn: true,
            user: response
          })
        })
        .catch(error => {
          console.log("Failed to get users details. ", error);
        });
    }
  };

  checkLoginStatus = () => {
    axios
      .get("/api/auth/login/success", { withCredentials: true })
      .then(response => {

        if(response.data.success) {
          console.log("Check Login Status: ", response.data.success);
          //Set the local storage
          localStorage.setItem("loggedIn", "true");
          localStorage.setItem("userId", response.data.user._id);

          // Set the state
          this.setState({
            loggedIn: true,
            user: response.data.user,
          });
        } else {
          localStorage.removeItem("loggedIn");
          localStorage.removeItem("userId");
          this.setState({
            loggedIn: false,

          });
        }
      })
      .catch(error => {
        console.log("Check Login Status Error: ", error);
      })
  };

  render() {
    return (
        <Router>
          <AuthRoute exact path="/" component={LoginPage}  layout={AuthLayout}  />
          <AppRoute exact path="/news-feed" component={Home} layout={MainLayout2}  />
          <AppRoute exact path="/profile" component={Profile} layout={MainLayout2} />
        </Router>
    );
  }
}

export default App;

