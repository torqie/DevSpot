import React, { useState } from "react";
import { Button } from "antd";


const LoginForm = () => {
  return (
      // <a href="http://localhost:3001/api/auth/github">
      //   <Button
      //       width={'100%'}
      //       height={50}>
      //     Login With Github
      //   </Button>
      // </a>

      <Button type="primary" href="http://localhost:3001/api/auth/github" >Login With Github</Button>

  );

};
export default LoginForm;