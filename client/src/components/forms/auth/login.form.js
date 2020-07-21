import React, { useState } from "react";
import { Button } from "antd";


const LoginForm = () => {
  return (
      <Button type="primary" href="http://localhost:3001/api/auth/github" >Login With Github</Button>
  );

};
export default LoginForm;