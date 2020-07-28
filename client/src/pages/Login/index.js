import React, { Component } from "react";
import { Button } from "antd";

class Index extends Component {
  render() {
    return (
        <div>
          <Button type="primary" href="http://localhost:3001/api/auth/github" >Login With Github</Button>
        </div>
    );
  }
}

export default Index;