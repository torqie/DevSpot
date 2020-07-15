import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleEmailOnChange = event => {
    setEmail(event.target.value);
  };
  const handlePasswordOnChange = event => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    alert("made it");
    history.push("/news-feed");

    axios.get('/api/auth/github/login').then(results => {

      console.log(results);
      history.push("/news-feed");
    }).catch(error => {
      console.log(error);
    });
  };

  return (
    <Form>
      <Form.Group controlId="email">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailOnChange}/>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordOnChange}/>
      </Form.Group>
      <Button onClick={handleFormSubmit} variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );

};
export default LoginForm;