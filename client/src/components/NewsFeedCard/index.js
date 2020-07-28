import React, { Component } from "react";
import { Card, Avatar } from "antd";
import "./style.css"
import { FaEllipsisH } from 'react-icons/fa';
import Menu from "antd/es/menu";
import Dropdown from "antd/es/dropdown";

const { Meta } = Card;
const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
);


class NewsFeedCard extends Component {
  render() {
    return (
        <div>
          <Card
            style={{marginBottom: "20px"}}
            title={<Avatar size="large" src="https://via.placeholder.com/300.png/663399/fff" />}
            extra={
              <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" style={{color: '#ffffff'}} onClick={e => e.preventDefault()}>
                  <FaEllipsisH />
                </a>
              </Dropdown>
            }
          >

            <Meta
              avatar={<Avatar size="large" src={this.props.author.avatar} />}
              title={this.props.author.name}
              description={this.props.content}
            />
          </Card>
        </div>
    );
  }
}

export default NewsFeedCard;