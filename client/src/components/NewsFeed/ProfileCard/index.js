import React, { Component } from "react";
import { Avatar, Col, Row, Statistic, Card, Divider } from "antd";
import {  UserOutlined } from '@ant-design/icons';
class ProfileCard extends Component {
  state = {
    loading: true,
    connections: 0,
    view: 0
  };

  componentDidMount() {
    this.setState({
      loading: true,
      connections: 12,
      views: 75,

    });

    this.setState({loading: false})
  }


  render() {
    return (

      <Card bordered={true} loading={this.state.loading}>

        <Row justify="center" style={{textAlign: "center"}} >
          <Col span={20}>
            <Avatar size={100} src={this.props.user.avatar} lg={{size: 125}}/>
            <h6 className="mt-2">{this.props.user.name}</h6>
            <small>{this.props.user.github.bio}</small>
          </Col>
        </Row>
        <Divider />
        <Row gutter={16} justify="center">
          <Col span={12} style={{textAlign: "center", borderRight: "1px solid"}} >
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