import React, { Component } from "react";
import { Row, Col, Form, Mentions, Button, Avatar, Empty } from "antd";
import NewsFeedCard from "../NewsFeedCard";
import axios from "axios";

class ShareUpdate extends Component {

  state = {
    search: '',
    loading: false,
    users: [],
    showPostButton: false,
    updateText: '',
    posts: []
  };

  onChange = value => {
    if(value.length > 0) {
      this.setState({updateText: value, showPostButton: true})
    } else {
      this.setState({updateText: value, showPostButton: false})
    }
  };

  onSubmit = async () => {
    const currentUser = await axios.get(`/api/users/${localStorage.getItem("userId")}`);
    this.setState({loading: true});
    axios
      .post('/api/posts',{
        author: currentUser.data,
        content: this.state.updateText,
        visibleTo: "public"
      }).then(response => {
        this.loadPosts();
        this.updatePostCount();
        this.setState({loading: false, updateText: ''});
      })
      .catch(error => {
        console.log("Error posting new update: ", error);
      });
  };

  updatePostCount = () => {
    this.props.updatePostCount();
  };

  onSearch = search => {
    this.setState({ search, loading: !!search, users: []});
    console.log("Search: ", search);
    this.loadUsers(search);
  };

  loadUsers = user => {
    if(!user) {
      this.setState({ users: [] });
      return;
    }
    axios
      .get(`/api/users/search/${user}`)
      .then(response => {
        const { search } = this.state;
        if (search !== user) return;
        console.log("users", response.data);
        this.setState({ users: response.data, loading: false })
      })
      .catch(error => {
        console.log(error);
      });
  };

  loadPosts = () => {
    axios
      .get('/api/posts')
      .then(response => {
        console.log("posts: ", response.data);
        this.setState({posts: response.data});
      })
      .catch(error => {
        console.log("Error retrieving posts: ", error);
    })
  };



  componentDidMount() {
    this.loadPosts();
  }

  render() {
    return (
        <>
          <Form>
            <Row>
              <Mentions
                  rows="3"
                  autoSize
                  style={{ width: '100%', border: 0 }}
                  onChange={this.onChange}
                  onSearch={this.onSearch}
                  placeholder="Whats on your mind? Use @ to mention someone."
                  value={this.state.updateText}
              >
                { this.state.users.length > 0 ? (
                    this.state.users.map((user, index) => {
                      return (
                      <option key={index} value={user.login}>
                        <Avatar src={user.avatar} style={{marginRight: "4px"}} />{user.name} <span style={{fontStyle: "italic"}}>[ @{user.login} ]</span>
                      </option>
                    )})
                ) : null }
              </Mentions>
            </Row>

            {this.state.showPostButton &&
              <Row style={{marginTop: "10px"}}>
                <Col span={24} style={{textAlign: 'right'}}>
                  <Button type="primary" htmlType="submit" onClick={this.onSubmit}>
                    Post Update
                  </Button>
                </Col>
              </Row>
            }
          </Form>

          {this.state.posts.length > 0 ? (
            this.state.posts.map((post, index) => {
              return  <NewsFeedCard key={index} post={post} />
            })
          ) : <Empty />}
        </>
    );
  }
}

export default ShareUpdate;