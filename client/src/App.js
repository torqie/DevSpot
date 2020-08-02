
import { BrowserRouter as Router, Redirect } from "react-router-dom";
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

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("accessToken");
  config.headers.Authorization =  token;
  axios.defaults.headers.common['Authorization'] = token;

  return config;
});

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
          localStorage.setItem("loggedIn", "true");
          localStorage.setItem("userId", response.data.user._id);
          localStorage.setItem("accessToken", response.data.user.accessToken);

          // Set the state
          this.setState({
            loggedIn: true,
            user: response.data.user,
          });
        } else {
          localStorage.removeItem("loggedIn");
          localStorage.removeItem("userId");
          localStorage.removeItem("accessToken");
          this.setState({loggedIn: false});
          return <Redirect to="/" />
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
          <AppRoute exact path="/profile/:id" component={Profile} layout={MainLayout2} />
        </Router>
    );
  }
}

export default App;

