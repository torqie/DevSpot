import React, { Component } from "react";
import { Avatar, Col, Row, Statistic, Card, Divider } from "antd";
import {  UserOutlined } from '@ant-design/icons';
import axios from "axios";
class ProfileCard extends Component {
  state = {
    loading: true,
    theme: 'dark',
    user: {
      github: {}
    },
    connections: 0,
    view: 0
  };

  componentDidMount() {
    this.setState({loading: true});
    axios
      .get(`/api/users/${localStorage.getItem("userId")}`)
      .then(response => {
        this.setState({
          user: response.data,
          loading: false
        })
      })
      .catch(error => {
        console.log("Problem getting user on the profile card component: ", error);
      });
  }


  render() {
    console.log("Profile Card State: ", this.state.user.github);
    return (

      <Card bordered={true} loading={this.state.loading} theme={this.state.theme}>

        <Row justify="center" style={{textAlign: "center"}} >
          <Col span={24}>
            <Avatar size={125} src={this.state.user.avatar}/>
            <h2 className="mt-2">{this.state.user.name}</h2>
            <small>{this.state.user.github.bio}</small>
          </Col>
        </Row>
        <Divider />
        <Row gutter={16} justify="center">
          <Col span={12} style={{textAlign: "center", borderRight: "1px solid #303030"}} >
            <Statistic title="Connections" value={this.state.connections} />
          </Col>
          <Col span={12} style={{textAlign: "center"}} >
            <Statistic title="Views" value={this.state.views} />
          </Col>
        </Row>
        <Divider />
        <Row gutter={16} justify="center">
          <Col>
            <a href="/profile">VIEW MY PROFILE</a>
          </Col>
        </Row>
      </Card>

    );
  }
}

export default ProfileCard;