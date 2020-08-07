import React from "react"
import "./Footer.css"
import { Col, Row } from "antd"
import { SearchOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
const { Paragraph } = Typography;

const Footer = () => {
    return (
        <>
            <div className="footer">
                <section className="rc-footer-columns">
                    <Row justify="center" style={{textAlign: "left"}}>
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
                                <li>Find a Bootcamp <SearchOutlined /></li>                                       
                                <li>Partnered Programs </li>
                                <li>Testamonials <DollarCircleOutlined /></li>
                            </ul>
                        </Col>

                        <Col span={8}>
                            <h4>
                                Help
                            </h4>
                            <ul className="list-unstyled">
                                <li>Feedback Management</li>
                                <li>Security</li>
                                <li>Contact a Resource <MessageOutlined /></li>
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

            </div>

        </>
    )
}

export default Footer