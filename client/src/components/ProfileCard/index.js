import React, { Component } from "react";
import { Avatar, Col, Row, Statistic, Card, Divider } from "antd";
import {  UserOutlined } from '@ant-design/icons';
import axios from "axios";
class ProfileCard extends Component {
  state = {
    loading: true,
    user: {},
    connections: 0,
    view: 0,
    postCount: 0
  };

  componentDidMount() {
    this.setState({loading: true});
    axios
      .get(`/api/users/${localStorage.getItem("userId")}`)
      .then(response => {
        this.setState({
          user: response.data,
          loading: false,
          postCount: response.data.posts.length
        })
      })
      .catch(error => {
        console.log("Problem getting user on the profile card component: ", error);
      });
  }


  render() {
   const loading = this.state.loading;
    return (

      <Card bordered={true} loading={loading}>

        <Row justify="center" style={{textAlign: "center"}} >
          <Col span={24}>
            { !loading && <Avatar size={125} src={this.state.user.avatar}/> }
            { !loading && <h2 style={{marginTop: "5px", marginBottom: "0px"}}>{this.state.user.name}</h2> }
            { !loading && <small>{this.state.user.github.bio}</small> }
          </Col>
        </Row>
        <Divider />
        <Row gutter={16} justify="center">
          <Col span={8} style={{textAlign: "center", borderRight: "1px solid #303030"}} >
            { !loading && <Statistic title="Posts" value={this.props.totalPosts} /> }
          </Col>
          <Col span={8} style={{textAlign: "center", borderRight: "1px solid #303030"}} >
            { !loading && <Statistic title="Connections" value={this.state.connections} /> }
          </Col>
          <Col span={8} style={{textAlign: "center"}} >
            { !loading &&  <Statistic title="Views" value={this.state.views} /> }
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