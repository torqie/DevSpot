import React, { Component } from 'react'
import { Row, Col } from 'antd';
import ProfileCard from "../../components/ProfileCard";
import WhatToDoCard from "../../components/WhatTodoCard";
import "./style.less";
import API from "../../utils/API"
import TechNewsFeed from "../../components/TechNews";


class Home extends Component {

    state = {
      totalPosts: 0
    };


  componentDidMount() {
    this.setState({
      user: this.props.user
    }, function () {
      this.loadTotalPosts(this.state.user);
    });

  }

  loadTotalPosts = (user) => {

    API.getUser(user._id).then(response => {
      console.log("Asdfasdfsdf", response.data.posts.length);
      this.setState({
        totalPosts: response.data.posts.length
      });
    }).catch(error => {
      console.log("Error get post Count", error);
    });
  }

  render() {

    if (this.props.user) {
      return (
        <div className="Home">
          <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            <Col span={24} md={{span: 6}}>
              <ProfileCard user={this.props.user} totalPosts={this.state.totalPosts}/>
            </Col>
            <Col span={24} md={{span: 12}}>
              <WhatToDoCard user={this.props.user} updatePostCount={this.loadTotalPosts}/>
            </Col>
            <Col span={0} md={{span: 6}}>
              <TechNewsFeed />
            </Col>
          </Row>
        </div>
      )
    } else {
      return null;
    }
  }


}

export default Home
