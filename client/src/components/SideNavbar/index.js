import React from "react";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaStream, FaQuestionCircle, FaUser } from "react-icons/fa";
import "./style.scss"
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function SideNavbar() {
  return (

        <IconContext.Provider value={{size: "1.6rem"}}>
          <ul className="nav flex-column align-items-center">
            <li className="nav-item">
              <NavLink className="nav-link" exact={true} activeClassName="active" to={"/"}>
                <OverlayTrigger
                    key="newsfeed"
                    placement="right"
                    overlay={<Tooltip id='tooltip-newsfeed'>News Feed</Tooltip>}
                >
                  <FaStream />
                </OverlayTrigger>

              </NavLink>
            </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to={"/profile"}>
                  <OverlayTrigger
                      key="profile"
                      placement="right"
                      overlay={<Tooltip id='tooltip-profile'>Profile</Tooltip>}
                  >
                    <FaUser />
                  </OverlayTrigger>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to={"/questions"}>
                  <OverlayTrigger
                      key="questions"
                      placement="right"
                      overlay={<Tooltip id='tooltip-questions'>Questions</Tooltip>}
                  >
                    <FaQuestionCircle />
                  </OverlayTrigger>
                </NavLink>
              </li>
          </ul>
        </IconContext.Provider>
  );

}

export default SideNavbar;

