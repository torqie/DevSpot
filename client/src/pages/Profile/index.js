import React, { Component } from "react"
import axios from 'axios';

class Profile extends Component {
  state = {
    loading: true,
    user: {},
  };

  componentDidMount() {
    axios
      .get('/api/users/find-by-login/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          user: response.data,
          loading: false
        })
      })
      .catch(error => {
        console.log("Error getting users profile.", error);
      });
  }

  render() {
    const { user, loading } = this.state;
    return (
        <>
          <h1>{!loading && user.name}</h1>
          <h1>{!loading && user.login}</h1>
        </>
    );
  }
}

export default Profile