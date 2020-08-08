import React, { Component } from "react";
import { Drawer, Menu } from "antd";
import { FaEllipsisV, FaUserFriends, FaHome } from "react-icons/fa";
import axios from  "axios";
import SubMenu from "antd/es/menu/SubMenu";
import Badge from "antd/es/badge";
import "./style.css"
import ConnectionDrawer from "../ConnectionDrawer";

class Navigation extends Component {
  state = {
    current: 'home',
    showConnectionDrawer: false,
    visible: false
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  hideDrawer = () => {
    this.setState({
      visible: false
    });
  };

  logout = event => {
    this.props.logout()
  };


  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };
  render() {
    const { current } = this.state;
    return (
      <div>
          <Menu theme={"dark"} onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" style={{textAlign: "right"}} >
            <Menu.Item key="home" >
              <a href="/"><FaHome style={{marginRight: "0", fontSize: "22px"}} /></a>
            </Menu.Item>

            <Menu.Item icon={
              <Badge count={1} style={{fontSize: "10px"}}>
                <FaUserFriends style={{marginRight: "0", fontSize: "22px"}} />
              </Badge>
            }
            onClick={this.showDrawer}>

            </Menu.Item>

            <SubMenu icon={<FaEllipsisV style={{marginRight: "0", fontSize: "22px"}} />}>
              <Menu.Item key="setting:1">Profile</Menu.Item>
              <Menu.Item key="setting:2">Settings</Menu.Item>
              <Menu.Item key="setting:3" onClick={this.logout}>Logout</Menu.Item>
            </SubMenu>
          </Menu>



      </div>

    );
  }
}

export default Navigation;