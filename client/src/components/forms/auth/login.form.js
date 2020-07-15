import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleEmailOnChange = event => {
    setEmail(event.target.value);
  };
  const handlePasswordOnChange = event => {
    setPassword(event.target.value);
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
      <a href="http://localhost:3001/api/auth/github">
        <Button
            label={'Login with LinkedIn'}
            width={'100%'}
            height={50} />
      </a>
    </Form>
  );

};
export default LoginForm;