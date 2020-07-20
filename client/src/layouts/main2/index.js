import { Layout, Menu } from "antd";
import React, { Component } from "react";
import "./style.css";
import { HomeOutlined, UserOutlined, BellOutlined } from "@ant-design/icons/lib/icons";
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
              <Menu theme={"dark"} mode="horizontal" defaultSelectedKeys={['1']} style={{backgroundColor: "#663399"}}>
                <Menu.Item key="1" icon={<HomeOutlined style={{fontSize: "20px"}}/>}/>
                <Menu.Item key="1" icon={<UserOutlined style={{fontSize: "20px"}}/>}/>
                <Menu.Item key="1" icon={<BellOutlined style={{fontSize: "20px"}}/>}/>
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
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
    );
  }
}

export default MainLayout2