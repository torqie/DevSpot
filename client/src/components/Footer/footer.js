import React from "react"
import "./Footer.css"
import { Col, Row } from "antd"
import { SearchOutlined } from '@ant-design/icons';
import { AppstoreOutlined } from '@ant-design/icons';
import { DollarCircleOutlined } from '@ant-design/icons';
import { SafetyCertificateOutlined } from '@ant-design/icons';
import { MessageOutlined } from '@ant-design/icons';
import { AuditOutlined } from '@ant-design/icons';


const Footer = () => {
    return (
        <>
            <div className="footer">
                <section className="rc-footer-columns">
                    <Row justify="center" style={{textAlign: "left"}}>
                        <Col span={8}>
                            <h2 className={{ textAlign: "center" }}>
                                Resources
                            </h2>
                            <ul className="list-unstyled">
                                <li>Find a Bootcamp</li>
                                <li>Learning Resources</li>
                                <li>Referral Program</li>
                            </ul>
                        </Col>

                        <Col span={8}>
                            <h2 className={{ textAlign: "center" }}>
                                Community
                            </h2>
                            <ul className="list-unstyled">  
                                <li><SearchOutlined />Find a Bootcamp </li>                                       
                                <li>Partnered Programs </li>
                                <li><DollarCircleOutlined /> Testamonials </li>
                            </ul>
                        </Col>

                        <Col span={8}>
                            <h2>
                                Help
                            </h2>
                            <ul className="list-unstyled">
                                <li><AppstoreOutlined /> Site Navigation </li>
                                <li><AuditOutlined /> Feedback Management </li>
                                <li><SafetyCertificateOutlined /> Security </li>
                                <li><MessageOutlined /> Contact a Resource </li>
                            </ul>
                        </Col>

                    </Row>
                    {/* Column1 */}
                </section>
                <br></br>
                <div className="col terms" >
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Devspot | All rights reserved | Terms of service | Privacy
                    </p>
                </div>

            </div>

        </>
    )
}

export default Footer