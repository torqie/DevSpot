import React, { Component } from "react";
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import API from '../../../../../utils/API'

const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
      <Form.Item>
        <TextArea rows={2} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          Add Answer
        </Button>
      </Form.Item>
    </>
);

const AnswerList = ({ answers }) => (
    <List
        style={{marginBottom: "20px"}}
        dataSource={answers}
        header={`${answers.length} ${answers.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={answer =>
            <Comment
                author={<a>{answer.author.name}</a>}
                avatar={<a><Avatar src={answer.author.github.avatar_url} alt={answer.author.name} /></a>}
                content={<p>{answer.content}</p>}
            />
        }
    />
);

class Answer extends Component {
  state = {
    user: {},
    answers: [],
    submitting: false,
    value: '',
  };

  componentDidMount() {
    // Get the answers for the question
    this.setState({
      answers: this.props.answers,
      user: this.props.user,
    });
  };

  updateAnswerCount = () => {
    this.props.updateAnswerCount(this.state.answers.length);
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    API.createAnswer(this.props.question._id, {
      author: this.props.user,
      content: this.state.value,
    }).then(response => {
      this.setState({
        submitting: false,
        value: ''
      });
      this.reloadAnswers();

    }).catch(error => { console.log(error) });
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  reloadAnswers = () => {

    API.getAnswers(this.props.question._id).then(response => {
      this.setState({
        answers: response.data.answers
      }, () => {
        this.updateAnswerCount()
      })
    }).catch(error => { console.log(error) });
  }

  render() {
    const { answers, submitting, value } = this.state;
    const { user } = this.props;

    return (
        <div  style={{backgroundColor: "#292929", padding: "0 20px", marginTop: "-20px"}}>
          {answers.length > 0 && <AnswerList answers={answers} />}

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

export default Answer;