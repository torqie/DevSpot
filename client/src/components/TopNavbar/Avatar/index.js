import React, { Component } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import './style.scss';

class Avatar extends Component {
  state = {
    imageUrl: "",
    name: ""
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
          if(responseJson.user.github.avatar_url !== this.state.imageUrl)
          this.setState({
            imageUrl: responseJson.user.github.avatar_url,
            name: responseJson.user.name
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
        <NavDropdown title={
      <img src={this.state.imageUrl} className="avatar rounded-circle" alt={this.state.name} />

  } id="profile" alignRight>
    <NavDropdown.Item>Profile</NavDropdown.Item>
    <NavDropdown.Item>Settings</NavDropdown.Item>
    <NavDropdown.Item>Logout</NavDropdown.Item>

    </NavDropdown>
    );
  }
}

export default Avatar;