import React, { Component } from "react";
import { Card, Avatar } from "antd";
import "./style.css"
import { FaEllipsisH } from 'react-icons/fa';
import Menu from "antd/es/menu";
import Dropdown from "antd/es/dropdown";

const { Meta } = Card;
const menu = (
    //TODO:: Check if post belongs to user if so allow to delete post if
    // not allow them to hide post / remove connection
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">Delete Post</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">Hide Post</a>
      </Menu.Item>
      <Menu.Item key="3">Un-follow</Menu.Item>
    </Menu>
);


class NewsFeedCard extends Component {
  render() {
    return (
        <div>
          <Card
            style={{marginBottom: "20px"}}
            title={[<Avatar size="large" src={this.props.author.avatar} style={{marginRight: "10px"}} />, this.props.author.name]}
            extra={
              <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" style={{color: '#ffffff'}} onClick={e => e.preventDefault()}>
                  <FaEllipsisH />
                </a>
              </Dropdown>
            }
          >

            <Meta
              description={this.props.content}
            />
          </Card>
        </div>
    );
  }
}

export default NewsFeedCard;