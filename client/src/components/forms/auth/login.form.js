import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const LoginForm = () => {
  return (
      <a href="http://localhost:3001/api/auth/github">
        <Button
            width={'100%'}
            height={50}>
          Login With Github
        </Button>
      </a>

  );

};
export default LoginForm;