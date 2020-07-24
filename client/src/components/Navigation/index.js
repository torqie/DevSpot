import React, { Component } from "react";
import { Menu, Space } from "antd";
import { NavLink, Redirect, withRouter } from "react-router-dom";
import { FaEllipsisV, FaUserFriends, FaHome } from "react-icons/fa";
import axios from  "axios";
import SubMenu from "antd/es/menu/SubMenu";
import Badge from "antd/es/badge";

import "./style.less"

class Navigation extends Component {
 state = {
   current: 'home'
 };

  logout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userId");
    axios
      .get('/api/auth/logout')
      .then(response => {
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });

  };


  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };
  render() {
    const { current } = this.state;
    return (
        <>
        <Menu theme={"dark"} onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" style={{textAlign: "right"}} >
            <Menu.Item key="home" >
              <a href="/"><FaHome style={{marginRight: "0", fontSize: "22px"}} /></a>
            </Menu.Item>

            <SubMenu icon={
              <Badge count={5} style={{fontSize: "10px"}}>
                <FaUserFriends style={{marginRight: "0", fontSize: "22px"}} />
              </Badge>
            }>
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </SubMenu>
            <SubMenu icon={<FaEllipsisV style={{marginRight: "0", fontSize: "22px"}} />}>
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </SubMenu>
        </Menu>
          </>
    );
  }
}

export default withRouter(Navigation);