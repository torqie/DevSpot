import React, { Component } from 'react'
import { Row, Col, Form, Input, Button, Avatar, Empty } from "antd";
import NewsFeedCard from "../NewsFeedCard";
import axios from 'axios'
import "./style.less";

class NewQuestionsCard extends Component {

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
				author: currentUser.data,
				content: this.state.questionText,
				visibleTo: "public"
			}).then(response => {
				console.log(response);
				this.loadQuestions();
				this.updateQuestionCount();
				this.setState({ loading: false, questionText: '' });
			})
			.catch(error => {
				console.log("Error posting new question: ", error);
			});
	};

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
		this.setState({ loading: false })
	};

	render() {
		return (
			<>

				<Form>
					<Row>
						<Input
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
						return <NewsFeedCard key={index} author={question.author} content={question.content} visibleTo={question.visibleTo} />
					})
				) : <Empty />}

			</>

			// <div>
			// 	<form class="qna-body field">
			// 		<textarea id="qna-text" rows="5" type="text" placeholder="Ask you question here..."></textarea>
			// 	</form>

			// 	<div class="qna-button">
			// 		<button type="submit" class="qna-submit">Submit question</button>
			// 	</div>

			// </div>

		);
	}
}

export default NewQuestionsCard;