import React, { Component } from 'react'
import { Row, Col, Form, Input, Button, Avatar, Empty } from "antd";
import QuestionCard from "./QuestionsCard";
import "./style.less";
import API from "../../../utils/API";

class NewQuestionsCard extends Component {
  state = {
    loading: true,
    showQuestionButton: false,
    questionText: '',
    questions: [],
  };

  componentDidMount() {
    this.loadQuestions();
    this.setState({ loading: false })
  };

  loadQuestions = () => {
    API.getQuestions().then(response => {
      console.log("questions: ", response.data);
      this.setState({ questions: response.data });
    }).catch(error => {console.log("Error retrieving questions: ", error);})
  };

  onChange = event => {
    if (event.target.value.length > 0) {
      this.setState({
        questionText: event.target.value, showQuestionButton: true
      })
    } else {
      this.setState({
        questionText: event.target.value, showQuestionButton: false
      })
    }
  };

  onSubmit = async () => {
    console.log("hello");
    if(!this.state.questionText){ return; }
    this.setState({ loading: true });
    API.createQuestion({
      author: this.props.user,
      content: this.state.questionText,
      visibleTo: "public"
    }).then(response => {
      this.loadQuestions();
      this.setState({loading: false, questionText: '', showQuestionButton: false});
    }).catch(error => {
      console.log("Error posting new question: ", error);
    });
  };

  render() {
    return (
        <>
          <Form>
            <Row>
              <Input
                  className="qna-body"
                  style={{ width: '100%', border: 0 }}
                  onChange={this.onChange}
                  placeholder="Ask you question here..."
                  value={this.state.questionText}
              >
              </Input>
            </Row>

            {this.state.showQuestionButton &&
            <Row style={{ marginTop: "10px" }}>
              <Col span={24} style={{ textAlign: 'right' }}>
                <Button type="primary" htmlType="submit" onClick={this.onSubmit}>
                  Ask Question
                </Button>
              </Col>
            </Row>
            }
          </Form>

          {this.state.questions.length > 0 ? (
              this.state.questions.map((question, index) => {
                return <QuestionCard key={question._id} question={question} user={this.props.user} />
              })
          ) : <Empty />}
        </>
    );
  }
}

export default NewQuestionsCard;