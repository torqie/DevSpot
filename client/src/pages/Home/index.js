import React, { Component } from "react"
import { Col, Row, } from "antd";
import ProfileCard from "../../components/ProfileCard";
import WhatToDoCard from "../../components/WhatToDoCard";
import TechNewsFeed from "../../components/TechNews";
import "./style.less";
import API from "../../utils/API"

class Home extends Component {
  state = {
    user: {},
    totalPosts: 0,
  };
  componentDidMount() {
    this.loadTotalPosts();
  }

  loadUser = () => {
    // Get the current logged in user
    API.getUser(localStorage.getItem("userId")).then(response => {
      this.setState({user: response.data, totalPosts: response.data.posts.length})
    }).catch(error => {
      console.log(error);
    });
  };

  loadTotalPosts = async () => {
    return this.loadUser();
  };

  render() {
    return (
      <>
        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
          <Col span={0} md={{span: 6}}>
              <ProfileCard totalPosts={this.state.totalPosts} />
          </Col>
          <Col span={24} md={{span: 12}}>
            <WhatToDoCard updatePostCount={this.loadUser}  />
          </Col>
          <Col span={0} md={{span: 6}}>
            <TechNewsFeed />
          </Col>
        </Row>
      </>
    );
  }
}
export default Home