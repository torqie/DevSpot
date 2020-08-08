import React, { Component } from "react";
import { Comment, Avatar, Form, Button, List, Input, Divider } from "antd";
import API from '../../../../../utils/API'
import { Link } from "react-router-dom";

const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
      <Form.Item>
        <TextArea rows={2} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </>
);

const CommentList = ({ comments }) => (
    <List
        style={{marginBottom: "20px"}}
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={comment =>
            <>
            <Comment
              author={<Link to={`/profile/${comment.author.login}`}>{comment.author.name} <span style={{color:"#5b5b5b", fontSize: ".75rem"}}>{` (@${comment.author.login})`}</span></Link>}
              avatar={<Link to={`/profile/${comment.author.login}`}><Avatar src={comment.author.github.avatar_url} alt={comment.author.name} /></Link>}
              content={<p>{comment.content}</p>}
            />
            <Divider dashed />
            </>
        }
    />
);

class PostComment extends Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
  };

  componentDidMount() {
    // Get the comments for the post
    this.setState({
      comments: this.props.comments
    });
  };

  updateCommentCount = () => {
    this.props.updateCommentCount(this.state.comments.length);
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    API.createComment(this.props.post._id, {
      author: this.props.user,
      content: this.state.value,
    }).then(response => {
      this.setState({
        submitting: false,
        value: ''
      });
      this.reloadComments();
      
    }).catch(error => { console.log(error) });
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  reloadComments = () => {

    API.getPost(this.props.post._id).then(response => {
      this.setState({
        comments: response.data.comments
      }, () => {
        this.updateCommentCount()
      })
    }).catch(error => { console.log(error) });
  }

  render() {
    const { comments, submitting, value } = this.state;
    const { user } = this.props;

    return (
        <div  style={{backgroundColor: "#292929", padding: "0 20px", marginTop: "-20px"}}>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
            avatar={
              <Avatar
                  src={user.github.avatar_url}
                  alt="Han Solo"
              />
            }
            content={
              <Editor
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                  submitting={submitting}
                  value={value}
              />
            }
        />
        </div>
    );
  }
}

export default PostComment;