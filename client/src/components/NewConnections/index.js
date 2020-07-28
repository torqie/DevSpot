import React, { Component } from "react";
import { List, Avatar, Divider, AutoComplete } from "antd";
import Search from "antd/es/input/Search";
import axios from "axios";

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
            return { value:  [<Avatar src={user.avatar} style={{marginRight: "4px"}} />, user.name, <span style={{fontStyle: "italic", fontWeight:"bold"}}> [ @{user.github.login} ] </span> ] };
          });
          console.log("New Connections:", newConnections);
          this.setState({options: newConnections, loading: false})
        })
        .catch(error => {
          console.log(error);
        });
  };
  onSelect = data => {};
  onChange = data => {};

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
              placeholder="input here"
          />

          <Divider>Connect With Others Around You</Divider>
            <List
                grid={{gutter: 16, column: 3}}
                loading={this.state.loading}
                itemLayout="horizontal"
                dataSource={[{name: "John Doe", bio: "Short Bio about the person."}, {name: "Jane Doe", bio: "Short Bio about the person."}, {name: "Joe Rogan", bio: "Short Bio about the person."}, {name: "John Doe", bio: "Short Bio about the person."}, {name: "Jane Doe", bio: "Short Bio about the person."}, {name: "Joe Rogan", bio: "Short Bio about the person."}]}
                renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                          title={<a href="https://ant.design">{item.name}</a>}
                          description={item.bio}
                      />
                    </List.Item>
                )}
            />

        </div>
    );
  }
}

export default NewConnectionsCard;