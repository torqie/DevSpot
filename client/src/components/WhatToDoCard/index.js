import React, { Component } from "react"
import {  Mentions,  Tabs,  Form, Empty, Card } from "antd";
import "./style.less";
import NewConnectionsCard from "../NewsFeed/NewConnections";

const { Option } = Mentions;
const { TabPane } = Tabs;


class WhatToDoCard extends Component {
  render() {
    return (
        <div className="card-container" >

            <Tabs type="card" >
              <TabPane tab="SHARE AN UPDATE" key="1" >
                <Form>

                  <Mentions
                      style={{ width: '100%', border: 0 }}
                      onChange={this.onChange}
                      onSelect={this.onSelect}
                      placeholder="Whats on your mind? Use @ to mention someone."
                  >

                    <Option value="afc163">afc163</Option>
                    <Option value="zombieJ">zombieJ</Option>
                    <Option value="yesmeck">yesmeck</Option>
                  </Mentions>

                </Form>
              </TabPane>
              <TabPane tab="Q & A" key="2" >
                <Empty />
              </TabPane>
              <TabPane tab="NEW CONNECTIONS" key="3">
               <NewConnectionsCard />

              </TabPane>
              <TabPane tab="FIND A JOB" key="4">
                <Empty />

              </TabPane>
            </Tabs>

        </div>
    );
  }
}

export default WhatToDoCard;