import React, { Component } from "react";
import { Card, Avatar, Divider, Col, Row, Space, Menu, Dropdown } from "antd";
import { FaRegCommentAlt ,FaRegThumbsDown, FaThumbsDown, FaRegThumbsUp, FaThumbsUp, FaEllipsisH,  } from "react-icons/fa";
import "./style.less"
import API from "../../../../utils/API"
import PostComments from "./Comment"
import { Link } from "react-router-dom";

class NewsFeedCard extends Component {

  state = {
    content: '',
    postLiked: false,
    postDisliked: false,
    postLikeCount: 0,
    postDislikeCount: 0,
    commentCount: 0,
    showComments: false,
    comments: {}
  };

  userFromMention = (user, offset, string) => {
    const username = user.substring(1, user.length).toLowerCase();
    const userLink = `<a href="/profile/${username.trim()}">${user}</a>`;
    return userLink;
  };

  updateCommentCount = count => {
    this.setState({
      commentCount: count
    })
  };

  onLikeClick = event => {
    event.preventDefault();
    API.likePost(this.props.post._id, {userId: this.props.user._id})
        .then(response => {
          this.setState({
            postLiked: true,
            postDisliked: false,
            postLikeCount: response.data.likes.length,
            postDislikeCount: response.data.dislikes.length,

          })
        }).catch(error => { console.log(error)});
  };

  onDislikeClick = event => {
    event.preventDefault();
    API.dislikePost(this.props.post._id, {userId: this.props.user._id})
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

  onCommentClick = event => {
    if(!this.state.showComments){
      API.getComments(this.props.post._id).then(response => {
        console.log("comments response",  response);
        this.setState({
          comments: response.data.comments,
          commentCount: response.data.comments.length,
        }, () => {
          this.setState({ showComments: !this.state.showComments})
        })
      }).catch(error => { console.log(error) });
    } else {
      this.setState({ showComments: !this.state.showComments})
    }

  };

  componentDidMount() {
    this.setState({
      comments: this.props.post.comments
    });

    const { post } = this.props;

    const like = post.likes.indexOf(this.props.user._id);
    const dislike = post.dislikes.indexOf(this.props.user._id);
    
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
      commentCount: post.comments.length
    })
  }

  render() {
    const { post, user } = this.props;

    return (
        <div>
          <Card
              bodyStyle={{padding: 0}}
              style={{marginBottom: "20px"}}
              title={[
                <Link to={`/profile/${post.author.login}`}>
                  <Avatar size="large" src={post.author.github.avatar_url} style={{marginRight: "10px"}} />
                </Link>,
                <Link to={`/profile/${post.author.login}`} style={{color:"#f6f6f6"}}>
                  {post.author.name}
                </Link>,
                <Link to={`/profile/${post.author.login}`}>
                  <span style={{color:"#5b5b5b", fontSize: ".75rem"}}>{` (@${post.author.login})`}</span>
                </Link>
              ]}
              extra={
                <Dropdown overlay={
                  <Menu>
                    {post.author._id === user._id ? (
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
                    <FaRegCommentAlt style={{cursor: "pointer"}} onClick={this.onCommentClick} /> <span>{this.state.commentCount}</span>
                  </Space>

                </div>
              </Col>
            </Row>
          </Card>
          {this.state.showComments ? (<PostComments user={user} post={post} comments={this.state.comments} updateCommentCount={this.updateCommentCount} />) : null}

        </div>
    );
  }
}

export default NewsFeedCard;