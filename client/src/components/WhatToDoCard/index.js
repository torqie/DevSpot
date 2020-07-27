import React, { Component } from "react"
import { Mentions, Tabs, Form, Empty, Card, Col } from "antd";
import "./style.less";
import NewConnectionsCard from "../NewConnections";
import ShareUpdate from "../ShareUpdate";
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
        this.setState({users: response.data});
      })
      .catch(error => {
        console.log(error);
      });
  };

  updatePostCount = () => {
    this.props.updatePostCount();
  };

  render() {
    return (
        <div id="what-to-do" className="card-container" style={{}} >
            <Tabs type="card" >
              <TabPane tab="SHARE AN UPDATE" key="1" >
                <ShareUpdate updatePostCount={this.updatePostCount} />
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