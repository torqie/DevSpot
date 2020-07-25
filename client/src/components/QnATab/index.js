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
				<form class="qnaBody">
					<input type="text" placeholder="Ask you question here...">

					</input>
				</form>

				<div class="qnaButton">
					<button type="submit" class="submit">Submit question</button>
				</div>

			</div>
		);
	}
}

export default NewQuestionsCard;