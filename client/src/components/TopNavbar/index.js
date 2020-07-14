import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from "react-bootstrap/NavDropdown";
import "./style.scss"
import ThemeSwitcher from "../ThemeSwitcher";
import { FiColumns } from "react-icons/fi";
import Avatar from "./Avatar";


function TopNavbar() {
  return (

      <Navbar expand="lg" className="align-bottom">
        <Navbar.Brand href="/">BootcampBook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <ThemeSwitcher />
            <Avatar />
          </Nav>
        </Navbar.Collapse>
      </Navbar>


  );

}

export default TopNavbar;
