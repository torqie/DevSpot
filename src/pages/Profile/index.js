import React, { Component } from "react"
import axios from 'axios';
import { Col, Row, } from "antd";
import ProfileCard from "../../components/ProfileCard";
import NewsFeedCard from "../../components/WhatTodoCard/ShareUpdateTab/NewsFeedCard";
import API from '../../utils/API';

class Profile extends Component {
  state = {
    loading: true,
    user: {},
    posts: {}
  };

  componentDidMount() {
    console.log("Match: ", this.props.match.params.id);
    API.getUserByLogin(this.props.match.params.id).then(response => {
          this.setState({
            user: response.data,
            posts: response.data.posts,
            loading: false
          })
        }).catch(error => {
          console.log("Error getting users profile.", error);
        });
  }

  render() {
    const { user, loading, posts } = this.state;
    return (
        <>
          <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            <Col span={24} md={{span: 8}}><h1>My Profile</h1>
              <ProfileCard user={this.props.user} totalPosts={this.state.posts.length} />
            </Col>
            <Col span={24} md={{span: 16}}><h1>My Posts</h1>
              {this.state.posts.length > 0 ? (
                  this.state.posts.map(post => {
                    return <NewsFeedCard key={post._id} post={post} user={this.props.user} />
                  })
              ): null }
            </Col>
          </Row>
        </>
    );
  }
}

export default Profile