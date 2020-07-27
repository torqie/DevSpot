import React, { Component } from 'react'
import axios from 'axios'
import "./style.less";

class NewQuestionsCard extends Component {
	state = {
		loading: true,
		article: {}
	}

	componentDidMount() {
		this.setState({ loading: false })
	}

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