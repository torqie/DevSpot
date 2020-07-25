import React, { Component } from "react";
import Card from "antd/es/card";
import { Avatar } from "antd";

class NewsFeedCard extends Component {
  render() {
    return (
        <div>
          <Card style={{marginBottom: "20px"}}>
            <Avatar src="https://via.placeholder.com/300.png/09f/fff" />
          </Card>
        </div>
    );
  }
}

export default NewsFeedCard;