import React, { Component } from "react";
import { Card, Avatar, Divider, Col, Row, Space, Menu, Dropdown } from "antd";
import { FaCommentAlt, FaThumbsDown, FaThumbsUp, FaEllipsisH } from "react-icons/fa";
import "./style.css"

const { Meta } = Card;



class NewsFeedCard extends Component {
  render() {
    return (
        <div>
          <Card
            bodyStyle={{padding: 0}}
            style={{marginBottom: "20px"}}
            title={[<Avatar size="large" src={this.props.author.avatar} style={{marginRight: "10px"}} />, this.props.author.name]}
            extra={
              <Dropdown overlay={
                <Menu>
                  {this.props.author._id === localStorage.getItem("userId") ? (
                      <Menu.Item key="0">
                        <a href="#">Delete Post</a>
                      </Menu.Item>
                  ) : (
                    <Menu.Item key="1">
                    <a href="#">Hide Post</a>
                    </Menu.Item>
                  )}
                </Menu>
              } trigger={['click']}>
                <a className="ant-dropdown-link" style={{color: '#ffffff'}} onClick={e => e.preventDefault()}>
                  <FaEllipsisH />
                </a>
              </Dropdown>
            }
          >
            <Row>
              <Col span={24} style={{padding: "30px"}}>
                <Meta
                    description={this.props.content}
                />
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <div className="card-footer" style={{
                  marginBottom: "10px",
                  borderTop: "1px solid #303030",
                  padding: "15px",
                  paddingBottom: 0
                }}>
                  <Space>
                    <a href="#"><FaThumbsUp style={{float: "left", color: "#ffffff"}} /> <span>0</span></a>
                    <Divider type="vertical" />
                    <a href="#"><FaThumbsDown /> 0</a>
                    <Divider type="vertical" />
                    <a href="#"><FaCommentAlt /> 2</a>
                  </Space>

                </div>
              </Col>
            </Row>
          </Card>
        </div>
    );
  }
}

export default NewsFeedCard;