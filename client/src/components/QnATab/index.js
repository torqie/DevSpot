import React, { Component } from 'react'
import axios from 'axios'
import "./style.less";

class NewQuestionsCard extends Component {

	state = {
		loading: true,
		article: {},
		showPostButton: false,
		posts: []
	};

	onChange = value => {
		if (value.length > 0) {
			this.setState({ questionText: value, showPostButton: true })
		} else {
			this.setState({ questionText: value, showPostButton: false })
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
        this.setState({questions: response.data});
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
			<div>
				<form class="qna-body field">
					<textarea id="qna-text" rows="5" type="text" placeholder="Ask you question here..."></textarea>
				</form>

				<div class="qna-button">
					<button type="submit" class="qna-submit">Submit question</button>
				</div>

			</div>
		);
	}
}



export default NewQuestionsCard;