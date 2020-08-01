import React, { Component } from "react"
import axios from 'axios';
import { Col, Row, } from "antd";
import ProfileCard from "../../components/ProfileCard";
import NewsFeedCard from "../../components/NewsFeedCard";

class Profile extends Component {
  state = {
    loading: true,
    user: {},
    posts: {}
  };

  componentDidMount() {
    axios
      .get('/api/users/find-by-login/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          user: response.data,
          loading: false
        })
      })
      .catch(error => {
        console.log("Error getting users profile.", error);
      });
      axios
      .get('/api/posts/')
      .then(response => {
        this.setState({
          posts: response.data,
          loading: false
        })
      })
      .catch(error => {
        console.log("Error getting users profile.", error);
      });
      
  }


  render() {
    const { user, loading } = this.state;
    return (
        <>
          <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            <Col span={0} md={{span: 8}}>
          <ProfileCard totalPosts={this.state.posts.length} />
            </Col>
            <Col span={0} md={{span: 14}}>
          {this.state.posts.length > 0 ? (
            this.state.posts.map(post => {
              return <NewsFeedCard post = {post} />
            })
          ): null }
          </Col>
          </Row>
        </>
    );
  }
}

export default Profile