import React from "react";
import "./style.css";
import Particles from "react-particles-js"

 
function AuthLayout({children}) {
  return (

<div>
    <Particles 
    height={window.outerHeight}
    params={{
      "particles": {
        "color": {
"value": "#7003A2"

        },
        "number": {
            "value": 150
        },
        "size": {
            "value": 5,
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
}} />

<div className="container" style={{
        position:"absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
        }}>
          
        <div className="row">
          <div className="col">
          <img src="../../images/DevspotLogo.png" alt="logo" className="center"/>
          </div>
          <div className="col">
            <h1>Connect with Bootcampers around the world.</h1>
          </div>
          <div className="col">
          
            {children}
          </div>
        </div>
      </div>
      </div>
  );
}
export default AuthLayout
