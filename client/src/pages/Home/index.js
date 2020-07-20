import React, { Component } from "react"
import Card from "react-bootstrap/Card";
import { Avatar, Col, Mentions, Row, Statistic, Tabs, Space, Form, Carousel } from "antd";
import ProfileCard from "../../components/NewsFeed/ProfileCard";
import "./style.less";
const { Option } = Mentions;
const { TabPane } = Tabs;


class Home extends Component {

  render() {
    return (
        <>
          <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            <Col span={0} md={{span: 6}}>
              <Space size="large" direction="vertical">
                <ProfileCard user={this.props.user} />
              </Space>
            </Col>
            <Col span={24} md={{span: 12}}>
              <div className="card-container">
                <Card>
                  <Tabs type="card" animated={true} bordered={true}>
                    <TabPane tab="Share an update" key="1" style={{padding: "0 30px 20px"}}>
                    <Form>

                      <Mentions
                          style={{ width: '100%' }}
                          onChange={this.onChange}
                          onSelect={this.onSelect}
                          style={{border:0}}
                          placeholder="Whats on your mind? Use @ to mention someone."
                      >

                        <Option value="afc163">afc163</Option>
                        <Option value="zombieJ">zombieJ</Option>
                        <Option value="yesmeck">yesmeck</Option>
                      </Mentions>

                    </Form>

                  </TabPane>
                  </Tabs>
                </Card>

              </div>
            </Col>
            <Col span={0} md={{span: 6}}>
              <Card title="Card title" bordered={true}>
                <Carousel autoplay>
                  <div>
                    <h3>1</h3>
                  </div>
                  <div>
                    <h3>2</h3>
                  </div>
                  <div>
                    <h3>3</h3>
                  </div>
                  <div>
                    <h3>4</h3>
                  </div>
                </Carousel>
              </Card>
            </Col>
          </Row>
        </>
  );
  }
}
export default Home