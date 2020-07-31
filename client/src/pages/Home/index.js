import React, { Component } from "react"
import { Col, Row, } from "antd";
import ProfileCard from "../../components/ProfileCard";
import WhatToDoCard from "../../components/WhatToDoCard";
import TechNewsFeed from "../../components/TechNews";
import ProfileDrawer from "../../components/ProfileDrawer";
import axios from "axios";
import "./style.less";

class Home extends Component {
  state = {
    user: {},
    totalPosts: 0,
    profileDrawerVisible: false
  };
  componentDidMount() {
    this.loadTotalPosts();
  }

  loadUser = () => {
    // Get the current logged in user
    axios
        .get(`/api/users/${localStorage.getItem("userId")}`)
        .then(response => {
          this.setState({user: response.data, totalPosts: response.data.posts.length})
        })
        .catch(error => {
          console.log(error);
        })
  };

  loadTotalPosts = async () => {
    return this.loadUser();
  };
  profileDrawerVisible = visible => {
    this.setState({profileDrawerVisible: visible})
  };

  render() {
    return (
        <>
          <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            <Col span={0} md={{span: 6}}>
                <ProfileCard totalPosts={this.state.totalPosts} />
            </Col>
            <Col span={24} md={{span: 12}}>
              <WhatToDoCard updatePostCount={this.loadUser} profileDrawerVisible={this.profileDrawerVisible} />
            </Col>
            <Col span={0} md={{span: 6}}>
              <TechNewsFeed />
            </Col>
          </Row>
          <ProfileDrawer profileDrawerVisible={this.state.profileDrawerVisible} />
        </>
  );
  }
}
export default Home