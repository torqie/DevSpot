import TopNavbar from "../../components/TopNavbar";
import SideNavbar from "../../components/SideNavbar";
import React, { Component } from "react";
import axios from "axios";

class MainLayout extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.setState({theme: this.props.user.theme})
  }

  handleThemeChange = async theme => {
    const currentTheme = 'theme-'+this.state.theme;
    const newTheme = 'theme-' + theme;
    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);
    await axios.put('http://localhost:3001/api/users/update-theme', {id: this.props.user._id, theme: theme}).then(result => {
      this.setState({theme: result.data.theme})
    }).catch(error => {
      console.log(error);
    });
  };

  render() {
    console.log(this.props.user);
    return (
        <>
          <TopNavbar user={this.props.user} changeTheme={this.handleThemeChange}/>
          <div className="container-fluid pl-5">
            <div className="row">
              <div className="col-2 col-sm-1">
                <SideNavbar />
              </div>

              <div className="col-8 col-sm-10 mt-5">
                <section id="main">
                  <div className="row">
                    <div className="col-12 ">
                      {this.props.children}
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