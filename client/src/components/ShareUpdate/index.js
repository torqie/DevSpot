import React, { Component } from "react";
import { Row, Col, Form, Mentions, Button, Avatar } from "antd";
import NewsFeedCard from "../NewsFeedCard";
import axios from "axios";

class ShareUpdate extends Component {

  state = {
    search: '',
    loading: false,
    users: [],
    showPostButton: false
  };

  onChange = value => {
    if(value.length > 0) {
      this.setState({showPostButton: true})
    } else {
      this.setState({showPostButton: false})
    }
  }

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

  render() {
    return (
        <>
          <Form>
            <Row>
              <Mentions
                  autoSize
                  style={{ width: '100%', border: 0 }}
                  onChange={this.onChange}
                  onSearch={this.onSearch}
                  onSelect={this.onSelect}
                  placeholder="Whats on your mind? Use @ to mention someone."
              >
                { this.state.users.length > 0 ? (
                    this.state.users.map((user, index) => {
                      return (
                      <option key={user._id} value={user.name}>
                        <Avatar src={user.avatar} style={{marginRight: "4px"}} />{user.name}
                      </option>
                    )})
                ) : null }
              </Mentions>
            </Row>

            {this.state.showPostButton &&
              <Row style={{marginTop: "10px"}}>
                <Col span={24} style={{textAlign: 'right'}}>
                  <Button type="primary" htmlType="submit">
                    Search
                  </Button>
                </Col>
              </Row>
            }
          </Form>
          <NewsFeedCard />
          <NewsFeedCard />
          <NewsFeedCard />
        </>
    );
  }
}

export default ShareUpdate;