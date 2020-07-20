import { Layout, Space, Row, Col, Menu, Card, Mentions, Tabs, Avatar, Statistic, Button } from "antd";
import React, { Component } from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined, ProfileOutlined } from '@ant-design/icons';
import "./style.css";
const { Header, Sider, Content } = Layout;
const { Option } = Mentions;
const { TabPane } = Tabs;

class MainLayout2 extends Component {
  constructor(props, {children}) {
    super();
    this.state = {
      collapsed: true
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onChange = value => {
    console.log('Change:', value);
  };

  onSelect = option => {
    console.log('select', option);
  };

  render() {
    return (
        <Layout style={{minHeight: "100vh"}}>
            <Header className="site-layout-background">

            </Header>
            <Content
                className="site-layout"
                style={{
                  marginTop: 40,
                  padding: '0 40px',
                  minHeight: 280,
                }}
            >
              <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                <Col span={0} md={{span: 6}}>
                  <Card bordered={true}>
                    <Row justify="center" style={{textAlign: "center"}} >
                      <Col span={12}>
                        <Avatar size={100} icon={<UserOutlined />} />
                        <h6>Terik Hone</h6>
                      </Col>
                    </Row>

                    <Row gutter={16} justify="center">
                      <Col span={12} style={{textAlign: "center"}} >
                        <Statistic title="Connections" value={74} />
                      </Col>
                      <Col span={12} style={{textAlign: "center"}} >
                        <Statistic title="Views" value={25} />
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col span={24} md={{span: 12}}>
                  <div className="card-container">
                    <Tabs animated={true} bordered={true}>
                      <TabPane tab="Tab Title 1" key="1">
                        <p>Content of Tab Pane 1</p>
                        <p>Content of Tab Pane 1</p>
                        <p>Content of Tab Pane 1</p>
                      </TabPane>
                      <TabPane tab="Tab Title 2" key="2">
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                      </TabPane>
                      <TabPane tab="Tab Title 3" key="3">
                        <p>Content of Tab Pane 3</p>
                        <p>Content of Tab Pane 3</p>
                        <p>Content of Tab Pane 3</p>
                      </TabPane>
                    </Tabs>
                  </div>
                </Col>
                <Col span={0} md={{span: 6}}>
                  <Card title="Card title" bordered={true}>
                    <Mentions
                        style={{ width: '100%' }}
                        onChange={this.onChange}
                        onSelect={this.onSelect}
                        defaultValue="@afc163"
                    >
                      <Option value="afc163">afc163</Option>
                      <Option value="zombieJ">zombieJ</Option>
                      <Option value="yesmeck">yesmeck</Option>
                    </Mentions>
                  </Card>
                </Col>
              </Row>
            </Content>
          </Layout>
    );
  }
}

export default MainLayout2