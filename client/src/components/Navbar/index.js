import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="/">
            Bootcamp Book
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" exact={true} activeClassName="active" to={"/"}>
                
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to={"/profile"}>Profile</NavLink>
            </li>
          </ul>
          </div>
        </nav>


  );
}

export default Navbar;
