import TopNavbar from "../../components/TopNavbar";
import SideNavbar from "../../components/SideNavbar";
import React from "react";
function MainLayout({children}) {
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
          {children}
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
export default MainLayout