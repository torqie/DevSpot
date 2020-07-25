import React, { Component } from "react"
import { Avatar, Col, Mentions, Row, Statistic, Tabs, Space, Form, Carousel, Empty, Card } from "antd";
import ProfileCard from "../../components/ProfileCard";
import "./style.less";

import WhatToDoCard from "../../components/WhatToDoCard";
import TechNewsFeed from "../../components/TechNews";
import NewsFeedCard from "../../components/NewsFeedCard";

const { Option } = Mentions;
const { TabPane } = Tabs;
const { Meta } = Card;




class Home extends Component {
  state = {
    user: {}
  };
  componentDidMount() {
    // Get the current logged in user

  }

  render() {
    return (
        <>
          <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            <Col span={0} md={{span: 6}}>
                <ProfileCard />
            </Col>
            <Col span={24} md={{span: 12}}>
              <WhatToDoCard />



            </Col>
            <Col span={0} md={{span: 6}}>
              <TechNewsFeed />
            </Col>
          </Row>
        </>
  );
  }
}
export default Home