import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
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