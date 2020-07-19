import React, { Component } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import './style.scss';

class Avatar extends Component {

  render() {
    return (
        <NavDropdown title={
      <img src={this.props.user.avatar} className="avatar rounded-circle" alt={this.props.user.name} />

  } id="profile" alignRight>
    <NavDropdown.Header>{this.props.user.name}</NavDropdown.Header>
    <NavDropdown.Item>Profile</NavDropdown.Item>
    <NavDropdown.Item>Settings</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="http://localhost:3001/api/auth/logout">Logout</NavDropdown.Item>

    </NavDropdown>
    );
  }
}

export default Avatar;