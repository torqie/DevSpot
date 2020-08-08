import React, { Component } from "react";
import { Avatar, Col, Row, Statistic, Card, Divider } from "antd";
import axios from "axios";
import { Link } from "react-router-dom/";

class ProfileCard extends Component {
  state = {
    loading: true,
    user: {},
    connections: 0,
    view: 0,
    postCount: 0
  };

  componentDidMount() {
    this.setState({
      loading: false,
      user: this.props.user,
    });
  }
  render() {
    const loading = this.state.loading;
    const { user } = this.props;
    return (

        <Card bordered={true} loading={loading}>

          <Row justify="center" style={{textAlign: "center"}} >
            <Col span={24}>
              { !loading && <Avatar size={125} src={user.github.avatar_url}/> }
              { !loading && <h2 style={{marginTop: "5px", marginBottom: "0px"}}>{user.name}</h2> }
              { !loading && <small>{user.github.bio}</small> }
            </Col>
          </Row>
          <Divider />
          <Row gutter={16} justify="center">
            <Col span={8} style={{textAlign: "center", borderRight: "1px solid #303030"}} >
              { !loading && <Statistic title="Posts" value={this.props.totalPosts} /> }
            </Col>
            <Col span={8} style={{textAlign: "center", borderRight: "1px solid #303030"}} >
              { !loading && <Statistic title="Connections" value={0} /> }
            </Col>
            <Col span={8} style={{textAlign: "center"}} >
              { !loading &&  <Statistic title="Views" value={0} /> }
            </Col>
          </Row>
          <Divider />
          <Row gutter={16} justify="center">
            <Col>
              {window.location.href.includes("profile") ? (
                  <Link to="/">RETURN HOME</Link>
              ) : (
                  <Link to={`/profile/${user.login}`}>VIEW MY PROFILE</Link>
              )}

            </Col>
          </Row>
        </Card>
    );
  }
}

export default ProfileCard;