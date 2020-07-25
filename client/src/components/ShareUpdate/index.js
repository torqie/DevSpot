import React, { Component } from "react";
import { Form, Mentions } from "antd";
import NewsFeedCard from "../NewsFeedCard";
import axios from "axios";

class ShareUpdate extends Component {

  state = {
    search: '',
    loading: false,
    users: []
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

  render() {
    return (
        <>
          <Form>
            <Mentions
                style={{ width: '100%', border: 0 }}
                onSearch={this.onSearch}
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
        </>
    );
  }
}

export default ShareUpdate;