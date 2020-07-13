import TopNavbar from "../../components/TopNavbar";
import SideNavbar from "../../components/SideNavbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import React from "react";
function MainLayout({children}) {
  return (
      <>
      <TopNavbar/>
      <div className="container-fluid">
      <div className="row">
      <div className="col-2 col-sm-1">
      <SideNavbar />
      </div>

  <div className="col-7 col-sm-8">
    <section id="main">
      <div className="row">
        <div className="col-12 ">
          {children}
        </div>
      </div>
    </section>
  </div>

  <div className="col-3">

      </div>
</div>


</div>
        </>
  );
}
export default MainLayout