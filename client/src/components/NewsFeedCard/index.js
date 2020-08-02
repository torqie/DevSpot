import React, { Component } from "react";
import { Card, Avatar, Divider, Col, Row, Space, Menu, Dropdown, Popover } from "antd";
import { FaCommentAlt, FaRegCommentAlt ,FaRegThumbsDown, FaThumbsDown, FaRegThumbsUp, FaThumbsUp, FaEllipsisH,  } from "react-icons/fa";
import "./style.css"
import API from "../../utils/API"

class NewsFeedCard extends Component {

  state = {
    content: '',
    postLiked: false,
    postDisliked: false,
    postLikeCount: 0,
    postDislikeCount: 0
  };

  userFromMention = (user, offset, string) => {
    const username = user.substring(1, user.length).toLowerCase();
    const userLink = `<a href="/profile/${username.trim()}">${user}</a>`;
    return userLink;
  };

  onLikeClick = event => {
    event.preventDefault();
    API.likePost(this.props.post._id, {userId: localStorage.getItem("userId")})
   .then(response => {
      console.log(response.data);
      this.setState({
        postLiked: true,
        postDisliked: false,
        postLikeCount: response.data.likes.length,
        postDislikeCount: response.data.dislikes.length,

      })
    }).catch(error => {});
  };

  onDislikeClick = event => {
    event.preventDefault();
    API.dislikePost(this.props.post._id, {userId: localStorage.getItem("userId")})
    .then(response => {
      this.setState({
        postLiked: false,
        postDisliked: true,
        postLikeCount: response.data.likes.length,
        postDislikeCount: response.data.dislikes.length,
      })
    }).catch(error => {
      console.log(error);
    });
  };

  componentDidMount() {
    const { post } = this.props;

    const like = post.likes.indexOf(localStorage.getItem("userId"));
    const dislike = post.dislikes.indexOf(localStorage.getItem("userId"));
    if(like >= 0) {
      this.setState({postLiked: true});
    } else {
      this.setState({postLiked: false});
    }
    if(dislike >= 0) {
      this.setState({postDisliked: true});
    } else {
      this.setState({postDisliked: false});
    }
    this.setState({
      postLikeCount: post.likes.length,
      postDislikeCount: post.dislikes.length,
    })
  }


  render() {
    const post = this.props.post;

    return (
        <div>
          <Card
            bodyStyle={{padding: 0}}
            style={{marginBottom: "20px"}}
            title={[<Avatar size="large" src={post.author.avatar} style={{marginRight: "10px"}} />, post.author.name]}
            extra={
              <Dropdown overlay={
                <Menu>
                  {post.author._id === localStorage.getItem("userId") ? (
                      <Menu.Item key="0">
                        <a href="#">Delete Post</a>
                      </Menu.Item>
                  ) : (
                    <Menu.Item key="1">
                    <a href="#">Hide Post</a>
                    </Menu.Item>
                  )}
                </Menu>
              } trigger={['click']}>
                <a className="ant-dropdown-link" style={{color: '#ffffff'}} onClick={e => e.preventDefault()}>
                  <FaEllipsisH />
                </a>
              </Dropdown>
            }
          >
            <Row>
              <Col span={24} style={{padding: "30px"}}>
                <div dangerouslySetInnerHTML={{__html: post.content.replace(/\B@([\w\-]+)/gim, this.userFromMention)}} />
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <div className="card-footer" style={{
                  marginBottom: "10px",
                  borderTop: "1px solid #303030",
                  padding: "15px",
                  paddingBottom: 0
                }}>
                  <Space>
                    {this.state.postLiked ? (<FaThumbsUp style={{cursor: "pointer"}} />) :(<FaRegThumbsUp onClick={this.onLikeClick} style={{cursor: "pointer"}} />)} <span>{this.state.postLikeCount}</span>
                    <Divider type="vertical" />
                    {this.state.postDisliked ? (<FaThumbsDown style={{cursor: "pointer"}} />) :(<FaRegThumbsDown onClick={this.onDislikeClick} style={{cursor: "pointer"}} />)} <span>{this.state.postDislikeCount}</span>
                    <Divider type="vertical" />
                    <FaRegCommentAlt style={{cursor: "pointer"}} /> <span>0</span>
                  </Space>

                </div>
              </Col>
            </Row>
          </Card>
        </div>
    );
  }
}

export default NewsFeedCard;