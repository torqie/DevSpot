import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import './App.less'
import LoginForm from './components/Login/'
import Navigation from "./components/Navigation";
import HomePage from './pages/Home'
import ProfilePage from './pages/Profile'
import { Layout } from "antd";
import Logo from "./DevspotLogo.png";
const { Header, Content, Footer } = Layout;

class App extends Component {
	constructor() {
		super();
		this.state = {
			loggedIn: null,
			user: null
		};

		this._logout = this._logout.bind(this);
	}

	componentDidMount() {
		axios.get('/api/auth/user').then(response => {
			if (!!response.data) {
				axios.get('/api/users/' + response.data.user._id).then(response2 => {
					this.setState({
						loggedIn: true,
						user: response2.data
					})
				})

			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_logout() {
		console.log('logging out')
		axios.post('/api/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	render() {
		const { loggedIn, user } = this.state;

		return (
			<div className="App">
				{!loggedIn ? (
						<LoginForm />
				) : (

						<Layout theme="dark" style={{minHeight: "100vh"}}>
							<Header theme="dark">
								<div className="logo" style={{float: "left"}}>
									<img src={Logo} alt="Dev Spot Logo" style={{maxHeight: "30px"}} />
								</div>
								<Navigation logout={this._logout} />
							</Header>
							<Content style={{ marginTop: 40, padding: '0 40px', minHeight: '100vh',}}>
								<Route exact path="/" render={() => <HomePage user={user} />} />
								<Route exact path="/profile/:id" render={(props) => <ProfilePage user={user} {...props} />} />
							</Content>
							<Footer  style={{ textAlign: 'center' }}>Designed and Developed by the AJAYS. T Freaking M</Footer>
					</Layout>
				)}
			</div>
		)
	}
}

export default App;
