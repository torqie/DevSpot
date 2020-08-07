import React from "react"
import "./Footer.css"
import { Col, Row } from "antd"

const Footer = () => {
    return (
        <>
            <footer className="rc-footer rc-footer-dark">
                <section className="rc-footer-columns">
                    <Row style={{ textAlign: "center" }}>
                        <Col span={8}>
                            <h4 className={{ textAlign: "center" }}>
                                Resources
                            </h4>
                            <ul className="list-unstyled">
                                <li>Find a Bootcamp</li>
                                <li>Learning Resources</li>
                                <li>Referral Program</li>
                            </ul>
                        </Col>

                        <Col span={8}>
                            <h4 className={{ textAlign: "center" }}>
                                Community
                            </h4>
                            <ul className="list-unstyled">
                                <li>Administration</li>
                                <li>Partnered Programs</li>
                                <li>Success Stories</li>
                            </ul>
                        </Col>

                        <Col span={8}>
                            <h4>
                                Help
                            </h4>
                            <ul className="list-unstyled">
                                <li>Contact a Resource</li>
                                <li>GitHub</li>
                                <li>Chat Room</li>
                            </ul>
                        </Col>

                    </Row>
                    {/* Column1 */}
                </section>
                <hr />
                <div className="col">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Devspot | All rights reserved | Terms of service | Privacy
                    </p>
                </div>

            </footer>

        </>
    )
}

export default Footer