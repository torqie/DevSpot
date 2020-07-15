import React, { Component } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import './style.scss';


class Avatar extends Component {
  render() {
    return (
        <NavDropdown title={
      <img src="/images/user-placeholder.png" className="avatar rounded-circle" alt="Users Name" />

  } id="profile" alignRight>
    <NavDropdown.Item>Profile</NavDropdown.Item>
    <NavDropdown.Item>Settings</NavDropdown.Item>
    <NavDropdown.Item>Logout</NavDropdown.Item>

    </NavDropdown>
    );
  }
}

export default Avatar;