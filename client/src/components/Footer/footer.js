import React from "react"
import "./Footer.css"

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>
                            place holder
                        </h4>
                        <ul className="list-unstyled">
                            <li>111</li>
                            <li>222</li>
                            <li>3333</li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>
                            place holder
                        </h4>
                        <ul className="list-unstyled">
                            <li>111</li>
                            <li>222</li>
                            <li>3333</li>
                        </ul>
                    </div>
                    {/* Column3 */}                    
                    <div className="col">
                        <h4>
                            place holder
                        </h4>
                        <ul className="list-unstyled">
                            <li>111</li>
                            <li>222</li>
                            <li>3333</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Devspot | All rights reserved | Terms of service | Privacy
                    </p>
                </div>
            </div>


        </div>

    )
}

export default Footer