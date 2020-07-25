import React, { Component } from "react"
import { Mentions, Tabs, Form, Empty, Card, Col } from "antd";
import "./style.less";
import NewConnectionsCard from "../NewConnections";
import NewsFeedCard from "../NewsFeedCard";
import axios from  "axios";

const { Option } = Mentions;
const { TabPane } = Tabs;

class WhatToDoCard extends Component {
  state = {
    users: []
  };



  componentDidMount = () => {
    axios
      .get("/api/users/")
      .then(response => {
        console.log("users", response.data);
        this.setState({users: response.data})
      })
      .catch(error => {

      });
  };

  render() {
    return (
        <div id="what-to-do" className="card-container" style={{}} >

            <Tabs type="card" >
              <TabPane tab="SHARE AN UPDATE" key="1" >
                <Form>

                  <Mentions
                      style={{ width: '100%', border: 0 }}
                      onChange={this.onChange}
                      onSelect={this.onSelect}
                      placeholder="Whats on your mind? Use @ to mention someone."
                  >
                    { this.state.users.length > 0 ? (
                        this.state.users.map((user, index) => {
                          return <option key={user._id} value={user.name}>{user.name}</option>
                        })
                    ) : null }
                  </Mentions>

                </Form>

                <NewsFeedCard />
                <NewsFeedCard />
                <NewsFeedCard />

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