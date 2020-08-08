import React, { Component } from "react";
import { Card, Avatar, Col, Row, Space, Menu, Dropdown } from "antd";
import { FaRegCommentAlt, FaEllipsisH, } from "react-icons/fa";
import API from "../../../../utils/API"
import Answers from "./Answer"

class QuestionCard extends Component {

  state = {
    content: '',
    answers: [],
    answersCount: 0,
    showAnswers: false,
  };

  userFromMention = (user, offset, string) => {
    const username = user.substring(1, user.length).toLowerCase();
    const userLink = `<a href="/profile/${username.trim()}">${user}</a>`;
    return userLink;
  };


  componentDidMount() {
    this.setState({
      answers: this.props.question.answers,
      answersCount: this.props.question.answers.length
    });
  }

  onAnswerClick = () => {
    if(!this.state.showAnswers) {
      API.getAnswers(this.props.question._id).then(response => {
        this.setState({
          answers: response.data.answers,
          answerCount: response.data.answers.length,
        }, () => {
          this.setState({showAnswers: !this.state.showAnswers})
        })
      }).catch(error => { console.log(error) });
    } else {
      this.setState({showAnswers: !this.state.showAnswers})
    }
  };

  updateAnswerCount = count => {
    this.setState({
      answersCount: count
    })
  }

  render() {
    const { user, question } = this.props;

    return (
        <div>
          <Card
              bodyStyle={{ padding: 0 }}
              style={{ marginBottom: "20px" }}
              title={[<Avatar size="large" src={question.author.github.avatar_url} style={{ marginRight: "10px" }} />, question.author.name]}
              extra={
                <Dropdown overlay={
                  <Menu>
                    {question.author._id === user._id ? (
                        <Menu.Item key="0">
                          <a href="#">Delete Question</a>
                        </Menu.Item>
                    ) : (
                        <Menu.Item key="1">
                          <a href="#">Hide Question</a>
                        </Menu.Item>
                    )}
                  </Menu>
                } trigger={['click']}>
                  <a className="ant-dropdown-link" style={{ color: '#ffffff' }} onClick={e => e.preventDefault()}>
                    <FaEllipsisH />
                  </a>
                </Dropdown>
              }
          >

            <Row>
              <Col span={24} style={{ padding: "30px" }}>
                <div dangerouslySetInnerHTML={{ __html: question.content.replace(/\B@([\w\-]+)/gim, this.userFromMention) }} />
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
                    <FaRegCommentAlt style={{ cursor: "pointer" }} onClick={this.onAnswerClick} /> <span>{this.state.answersCount}</span>
                  </Space>
                </div>
              </Col>
            </Row>
          </Card>
          {this.state.showAnswers ?
              (
                <Answers
                    user={this.props.user}
                    question={this.props.question}
                    answers={this.state.answers}
                    updateAnswerCount={this.updateAnswerCount}
                />
              ) : null
          }
        </div>
    );
  }
}

export default QuestionCard;