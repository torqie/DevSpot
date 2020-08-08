import React, { Component } from "react";
import { List, Avatar, Divider, AutoComplete } from "antd";
import axios from "axios";
import Redirect from "react-router-dom/es/Redirect";

class NewConnectionsCard extends Component {
  state = {
    loading: true,
    options: [],
  };


  componentDidMount() {
    this.setState({loading: false})
  }

  onSearch = searchText => {
    // api call to get all the users that match the search text and put it into the options state
    this.setState({ loading: true});
    axios
        .get(`/api/users/search/${searchText}`)
        .then(response => {
          const newConnections = response.data.map(user => {
            return { value:  [<Avatar src={user.github.avatar_url} style={{marginRight: "4px"}} />, user.name, <span style={{fontStyle: "italic", fontWeight:"bold"}}> [ @{user.github.login} ] </span> ] };
          });
          console.log("New Connections:", newConnections);
          this.setState({options: newConnections, loading: false})
        })
        .catch(error => {
          console.log(error);
        });
  };
  onSelect = data => {
    return window.location.href=`/profile/${data[2].props.children[1]}`
  };
  onChange = data => {
    console.log("data", data)
  };

  setupOptions = connections => {

  };

  render() {
    return (
        <div>
          <Divider>Search For Others</Divider>

          <AutoComplete
              style={{width: "100%"}}
              options={this.state.options}
              onSelect={this.onSelect}
              onSearch={this.onSearch}
              placeholder="Search by name"
          />

          <Divider>Connect With Others Around You</Divider>
          <List
              grid={{gutter: 16, column: 3}}
              loading={this.state.loading}
              itemLayout="horizontal"
              dataSource={[{name: "Joe Rogan", bio: "Short Bio about the person."}]}
              renderItem={user => (
                  <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href={`/profile/`}>{user.name}</a>}
                        description={user.bio}
                    />
                  </List.Item>
              )}
          />

        </div>
    );
  }
}

export default NewConnectionsCard;