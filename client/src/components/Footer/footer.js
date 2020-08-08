import React from "react"
import "./Footer.css"
import { Col, Row } from "antd"
import { 
    SearchOutlined, 
    BookOutlined, 
    RocketOutlined, 
    FacebookOutlined, 
    TwitterOutlined, 
    YoutubeFilled, 
    GithubFilled, 
    InstagramOutlined, 
    BugOutlined, 
    AuditOutlined, 
    MessageOutlined, 
    SafetyCertificateOutlined, 
    DollarCircleOutlined,
     AppstoreOutlined
  } from '@ant-design/icons';




const Footer = () => {
    return (
        <>
            <div className="footer">
                <section className="rc-footer-columns">
                    <Row justify="center">
                        <Col span={8}>
                            <ul className="list-unstyled">
                                <h2 className="header">
                                    Resources
                                    </h2>
                                        <li>
                                            <SearchOutlined /> 
                                                <a href="" title=""> Find a Bootcamp</a> </li>
                                        <li>
                                            <BookOutlined /> 
                                                <a href="" title=""> Learning Resources</a> </li>
                                        <li>
                                            <AuditOutlined /> 
                                                <a href="" title=""> Referral Program</a> </li>
                                        <li>
                                            <GithubFilled /> 
                                                <a href="" title=""> Github</a> </li>
                                    </ul>
                                </Col>

                        <Col span={8}>
                            <ul className="list-unstyled">
                                <h2 className="header">
                                    Community
                                    </h2>
                                        <li>
                                            <RocketOutlined />
                                                <a href="" title=""> Partnered Programs </a>
                                        </li>
                                        <li>
                                            <DollarCircleOutlined />
                                                <a href="" title=""> Testamonials </a>
                                        </li>
                                        <li>
                                            <InstagramOutlined /> 
                                                <a href="" title=""> Instagram </a>
                                        </li>
                                        <li>
                                            <TwitterOutlined /> 
                                                <a href="" title=""> Twitter </a>
                                        </li>
                                        <li>
                                            <FacebookOutlined /> 
                                                <a href="" title=""> Facebook</a>
                                        </li>
                                        <li>
                                            <YoutubeFilled /> 
                                                <a href="" title=""> Youtube</a>
                                        </li>
                                    </ul>
                                </Col>

                        <Col span={8}>
                            <ul className="list-unstyled">
                                <h2 className="header">
                                    Help
                            </h2>
                                <li>
                                    <AppstoreOutlined /> 
                                        <a href="" title=""> Site Navigation</a> </li>
                                <li>
                                    <AuditOutlined /> 
                                        <a href="" title=""> Feedback Management</a> </li>
                                <li>
                                    <SafetyCertificateOutlined /> 
                                        <a href="" title=""> Security</a>  </li>
                                <li>
                                    <MessageOutlined /> 
                                        <a href="" title=""> Contact a Resource</a>  </li>
                                <li>
                                    <BugOutlined /> 
                                        <a href="" title=""> Report a Bug</a> </li>
                            </ul>
                        </Col>

                    </Row>
                    {/* Column1 */}
                    
                </section>

            </div>
                <br className="break"></br>
                    <div className="col terms" >
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} Devspot  |  All rights reserved  |  Terms of service  |  Privacy
                        </p>
                    </div>

        </>
    )
}

export default Footer