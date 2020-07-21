import { Layout, Menu } from "antd";
import React, { Component } from "react";
import "./style.css";
import { HomeOutlined, UserOutlined, BellOutlined } from "@ant-design/icons/lib/icons";
import Space from "antd/es/space";
import Avatar from "antd/es/avatar";
import { Link, NavLink } from "react-router-dom";
const { Header, Content, Footer } = Layout;


class MainLayout2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    }
  }

  render() {
    return (
        <Layout style={{minHeight: "100vh"}}>
            <Header style={{backgroundColor: "#663399"}}>
              <div className="logo" />

              <Menu theme={"dark"} mode="horizontal" defaultSelectedKeys={['1']} style={{textAlign: "right", backgroundColor: "#663399"}}>
                <Space size={"middle"}>

                  <Menu.Item key="1">
                    <NavLink to="/news-feed">
                      <HomeOutlined style={{fontSize: "20px", color: "#fff", padding: "10px"}} />
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <NavLink to="/profile">
                      <UserOutlined style={{fontSize: "20px", color: "#fff"}} />
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <NavLink to="/profile">
                      <BellOutlined style={{fontSize: "20px", color: "#fff"}} />
                    </NavLink>
                  </Menu.Item>
                </Space>

              </Menu>
            </Header>
            <Content
                className="site-layout"
                style={{
                  marginTop: 40,
                  padding: '0 40px',
                  minHeight: 280,
                }}
            >
              {this.props.children}
            </Content>
          <Footer style={{ textAlign: 'center' }}>Designed and Developed by WolffsRockstars. T Freaking M</Footer>
          </Layout>
    );
  }
}

export default MainLayout2