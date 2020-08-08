import React, { Component } from "react";
import { Button } from "antd";
import "./style.css"
import GithubOutlined from "@ant-design/icons/lib/icons/GithubOutlined";


class Index extends Component {
  render() {
    return (
        <div className= "loginbutton">
          <Button type="primary" size="large" icon={<GithubOutlined/>

} href="http://localhost:3001/api/auth/github" >Login With Github</Button>
        </div>
    );
  }
}

export default Index;