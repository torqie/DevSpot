import TopNavbar from "../../components/TopNavbar";
import SideNavbar from "../../components/SideNavbar";
import React, { Component } from "react";
import axios from "axios";

class MainLayout extends Component{
  constructor(props, {children}) {
    super(props, {children});
    this.state = {

    }
  }

  componentDidMount() {

    axios.get('http://localhost:3001/api/auth/login/success')
    .then(response => {
      if (response.status === 200) return response.json();
      throw new Error("failed to authenticate user");
    })
        .then(responseJson => {
          this.setState({
            authenticated: true,
            user: responseJson.user
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
          <TopNavbar/>
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