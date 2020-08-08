import React, { Component } from "react"
import { Tabs, Empty } from "antd";
import "./style.less";
import NewConnectionsCard from "./NewConnectionsTab";
import ShareUpdate from "./ShareUpdateTab";
import NewQuestionsCard from "./NewQuestionsTab";
import API from "../../utils/API"
const { TabPane } = Tabs;


class WhatToDoCard extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    API.getUsers().then(response => {
      this.setState({
        users: response.data
      })
    }).catch(error => { console.log(error) });
  };


  updatePostCount = () => {
    this.props.updatePostCount(this.props.user);
  };

  render() {
    return (
        <div id="what-to-do" className="card-container">
          <Tabs type="card" >
            <TabPane tab="SHARE AN UPDATE" key="1" >
              <ShareUpdate user={this.props.user} updatePostCount={this.updatePostCount} />
            </TabPane>
            <TabPane tab="Q & A" key="2" >
              <NewQuestionsCard user={this.props.user} />
            </TabPane>
            {/*<TabPane tab="NEW CONNECTIONS" key="3">*/}
            {/*  <NewConnectionsCard user={this.props.user} />*/}
            {/*</TabPane>*/}
            {/*<TabPane tab="FIND A JOB" key="4">*/}
            {/*  <Empty />*/}
            {/*</TabPane>*/}
          </Tabs>
        </div>
    );
  }
}

export default WhatToDoCard;