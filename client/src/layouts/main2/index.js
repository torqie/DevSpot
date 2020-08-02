import { Layout } from "antd";
import React, { Component } from "react";
import "./style.css";
import Navigation from "../../components/Navigation";
const { Header, Content, Footer } = Layout;


class MainLayout2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigate: false,
      theme: "dark"
    }
  }



  render() {
    return (
        <Layout theme={this.state.theme} style={{minHeight: "100vh"}}>
            <Header theme="dark">
              <div className="logo">
                <h3>DevSpot</h3>
              </div>
              <Navigation />
            </Header>
            <Content
                className="site-layout"
                style={{
                  marginTop: 40,
                  padding: '0 40px',
                  minHeight: '100vh',
                }}

            >
              {this.props.children}
            </Content>
          <Footer  style={{ textAlign: 'center' }}>Designed and Developed by WolffsRockstars. T Freaking M</Footer>
          </Layout>
    );
  }
}

export default MainLayout2