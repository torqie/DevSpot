import React, { Component } from "react"

class Profile extends Component {
  render() {
    return (
        <h1>{this.props.user}</h1>

    );
  }
}

export default Profile