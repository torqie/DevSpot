import React, { Component } from "react";
import { List, Avatar, Divider } from "antd";

class NewConnectionsCard extends Component {
  state = {
    loading: true,
    article: {}
  }

  componentDidMount() {
    // // API Call
    // axios.get("apiaddress").then(response => {
    //   this.setState({article: response.data})
    // }).catch(error => {
    //   console.log("Error getting news article: ", error);
    // });
    this.setState({loading: false})
  }

  render() {
    return (
        <div>
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