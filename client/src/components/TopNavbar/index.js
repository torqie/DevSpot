import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "./style.scss"
import ThemeSwitcher from "../ThemeSwitcher";
import Avatar from "./Avatar";


function TopNavbar(props) {
  return (

      <Navbar expand="lg" className="align-bottom">
        <Navbar.Brand href="/" className="text-primary">BootcampBook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <ThemeSwitcher user={props.user} changeTheme={props.changeTheme}/>
            <Avatar user={props.user} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>


  );

}

export default TopNavbar;
