import React, { Component } from "react";
import { Card, Avatar, Divider, Col, Row, Space, Menu, Dropdown, Popover } from "antd";
import { FaCommentAlt, FaRegCommentAlt, FaRegThumbsDown, FaThumbsDown, FaRegThumbsUp, FaThumbsUp, FaEllipsisH, } from "react-icons/fa";
// import "./style.css"
import axios from 'axios';

class QuestionCard extends Component {

	state = {
		content: '',
		thumbsUp: false,
		thumbsDown: false,
		thumbsUpCount: 0,
		thumbsDownCount: 0
	};

	userFromMention = (user, offset, string) => {
		const username = user.substring(1, user.length).toLowerCase();
		const userLink = `<a href="/profile/${username.trim()}">${user}</a>`;
		return userLink;
	};

	thumbsUpClick = event => {
		event.preventDefault();
		console.log(this.props.question);
		axios.question(`/api/questions/${this.props.question._id}/thumbsUp`, {
			userId: localStorage.getItem("userId")
		}).then(response => {
			console.log(response.data);
			this.setState({
				thumbsUp: true,
				thumbsUpCount: response.data.thumbsUp.length,
				thumbsDownCount: response.data.thumbsDown.length,
				thumbsDown: false,
			})
		}).catch(error => { });
	};

	thumbsDownClick = event => {
		event.preventDefault();
		axios.question(`/api/questions/${this.props.question._id}/thumbsDown`, {
			userId: localStorage.getItem("userId")
		}).then(response => {
			this.setState({
				thumbsUp: false,
				thumbsDown: true,
				thumbsUpCount: response.data.thumbsUp.length,
				thumbsDownCount: response.data.thumbsDown.length,
			})
		}).catch(error => {
			console.log(error);
		});
	};

	componentDidMount() {
		const { question } = this.props;

		const thumbsUp = question.thumbsUp.indexOf(localStorage.getItem("userId"));
		const thumbsDown = question.thumbsDown.indexOf(localStorage.getItem("userId"));
		if (thumbsUp >= 0) {
			this.setState({ thumbsUp: true });
		} else {
			this.setState({ thumbsUp: false });
		}
		if (thumbsDown >= 0) {
			this.setState({ thumbsDown: true });
		} else {
			this.setState({ thumbsDown: false });
		}
		this.setState({
			thumbsUpCount: question.thumbsUp.length,
			thumbsDownCount: question.thumbsDown.length,
		})
	}

	render() {
		const question = this.props.question;

		return (
			<div>
				<Card
					bodyStyle={{ padding: 0 }}
					style={{ marginBottom: "20px" }}
					title={[<Avatar size="large" src={question.author.avatar} style={{ marginRight: "10px" }} />, question.author.name]}
					extra={
						<Dropdown overlay={
							<Menu>
								{question.author._id === localStorage.getItem("userId") ? (
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
									{this.state.thumbsUp ? (<FaThumbsUp style={{ cursor: "pointer" }} />) : (<FaRegThumbsUp onClick={this.thumbsUpClick} style={{ cursor: "pointer" }} />)} <span>{this.state.thumbsUpCount}</span>
									<Divider type="vertical" />
									{this.state.thumbsDown ? (<FaThumbsDown style={{ cursor: "pointer" }} />) : (<FaRegThumbsDown onClick={this.thumbsDownClick} style={{ cursor: "pointer" }} />)} <span>{this.state.thumbsDownCount}</span>
									<Divider type="vertical" />
									<FaRegCommentAlt style={{ cursor: "pointer" }} /> <span>0</span>
								</Space>

							</div>
						</Col>
					</Row>
				</Card>
			</div>
		);
	}
}

export default QuestionCard;