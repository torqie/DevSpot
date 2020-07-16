import TopNavbar from "../../components/TopNavbar";
import SideNavbar from "../../components/SideNavbar";
import React, { Component } from "react";
import axios from "axios";

class MainLayout extends Component{
  constructor(props, {children}) {
    super(props, {children});
    this.state = {
      user: {},
      theme: "default"
    }
  }


  handleThemeChange = async theme => {

    const currentTheme = 'theme-'+this.state.theme;
    const newTheme = 'theme-' + theme;
    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);
    await axios.put('http://localhost:3001/api/users/update-theme', {id: this.state.user._id, theme: theme}).then(result => {
      this.setState({theme: result.data.theme})
    }).catch(error => {
      console.log(error);
    });
  };


  componentDidMount() {

    fetch("http://localhost:3001/api/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
        .then(response => {
          if (response.status === 200) return response.json();
          throw new Error("failed to authenticate user");
        })
        .then(responseJson => {
          // Set the theme from he database on login.
          document.body.classList.remove("theme-default");
          document.body.classList.add(`theme-${responseJson.user.theme}`);

          // Set the state for the user.
          this.setState({
            authenticated: true,
            user: responseJson.user,
            theme: responseJson.user.theme
          }, () => {

          });
        })
        .catch(error => {
          this.setState({
            authenticated: false,
            error: "Failed to authenticate user"
          });
        });
  }


  render() {
    return (
        <>
          <TopNavbar user={this.state.user} changeTheme={this.handleThemeChange}/>
          <div className="container-fluid pl-5">
            <div className="row">
              <div className="col-2 col-sm-1">
                <SideNavbar />
              </div>

              <div className="col-8 col-sm-10 mt-5">
                <section id="main">
                  <div className="row">
                    <div className="col-12 ">
                      {this.children}
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-2 col-1"/>
            </div>


          </div>
        </>
    );
  }

}
export default MainLayout