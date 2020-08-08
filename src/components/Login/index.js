import React, { Component } from 'react'
import Button from "antd/es/button";
import GithubOutlined from "@ant-design/icons/lib/icons/GithubOutlined";
import Particles from "react-particles-js";
import './style.less'
import Redirect from "react-router-dom/es/Redirect";

import Logo from "./DevspotLogo.png";


class LoginForm extends Component {
	constructor() {
		super();
		this.state = {
			redirectTo: null
		}
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
					<div>
					<Particles
							height={window.outerHeight}
							params={{
								"particles": {
									"color": {
										"value": "#7003A2"
									},
									"number": {
										"value": 150
									},
									"size": {
										"value": 5,
									}
								},
								"interactivity": {
									"events": {
										"onHover": {
											"enable": true,
											"mode": "repulse"
										}
									}
								}
							}} />
					<div className="container" style={{
				position:"absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%"
			}}>

		<div className="row">
					<div className="col">
					<img src={Logo} alt="logo" className="center" style={{ maxWidth: "650px" }}/>
					</div>
			<div className="col">
				<h1 style={{marginTop:"10px"}}>Connect with Bootcampers around the world.</h1>
			</div>
			<div className="col">

					<div className= "loginbutton">
					<Button type="primary" size="large" icon={<GithubOutlined/>} href="/api/auth/github" >
					Login With Github
			</Button>
		</div>
		</div>
		</div>
		</div>
		</div>
			)
		}
	}
}

export default LoginForm
