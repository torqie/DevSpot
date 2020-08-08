import React, { Component } from "react";
import { Menu } from "antd";
import { FaEllipsisV, FaUserFriends, FaHome } from "react-icons/fa";

import SubMenu from "antd/es/menu/SubMenu";
import Badge from "antd/es/badge";
import "./style.css"
import { Link } from "react-router-dom/";


class Navigation extends Component {
  state = {
    current: 'home',
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
              <Link to="/"><FaHome style={{marginRight: "0", fontSize: "22px"}} /></Link>
            </Menu.Item>

            <Menu.Item icon={
              <Badge count={1} style={{fontSize: "10px"}}>
                <FaUserFriends style={{marginRight: "0", fontSize: "22px"}} />
              </Badge>
            }>

            </Menu.Item>

            <SubMenu icon={<FaEllipsisV style={{marginRight: "0", fontSize: "22px"}} />}>
              <Menu.Item key="setting:1"><Link to={`/profile/${this.props.user.login}`}>Profile</Link></Menu.Item>
              <Menu.Item key="setting:2" onClick={this.logout}>Logout</Menu.Item>
            </SubMenu>
          </Menu>



      </div>

    );
  }
}

export default Navigation;