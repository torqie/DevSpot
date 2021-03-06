import React, { Component } from 'react'
import { Row, Col, Form, Input, Button, Avatar, Empty } from "antd";
import QuestionCard from "../QuestionCard";
import axios from 'axios'
import "./style.less";

class AskAQuestion extends Component {

	state = {
		loading: true,
		showQuestionButton: false,
		questionText: '',
		questions: []
	};

	onChange = event => {
		if (event.target.value.length > 0) {
			this.setState({
				questionText: event.target.value, showQuestionButton
					: true
			})
		} else {
			this.setState({
				questionText: event.target.value, showQuestionButton
					: false
			})
		}
	};

	onSubmit = async () => {
		const currentUser = await axios.get(`/api/users/${localStorage.getItem("userId")}`);
		this.setState({ loading: true });
		axios
			.post('/api/questions', {
				author: currentUser.data._id,
				content: this.state.questionText,
				visibleTo: "public"
			}).then(response => {
				this.loadQuestions();
				// this.updateQuestionCount();
				this.setState({ loading: false, questionText: '' });
			})
			.catch(error => {
				console.log("Error posting new question: ", error);
			});
	};

	// updateQuestionCount = () => {
	//   this.props.updateQuestionCount();
	// };

	loadQuestions = () => {
		axios
			.get('/api/questions').then(response => {
				console.log("questions: ", response.data);
				this.setState({ questions: response.data });
			})
			.catch(error => {
				console.log("Error retrieving questions: ", error);
			})
	};

	componentDidMount() {
		this.loadQuestions({})
		this.setState({ loading: false })
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
						return <QuestionCard key={index} question={question} content={question.content} visibleTo={question.visibleTo} />
					})
				) : <Empty />}

			</>
		);
	}
}

export default AskAQuestion;