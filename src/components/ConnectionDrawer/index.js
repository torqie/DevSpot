import React, { Component } from "react";
import { Drawer } from 'antd';

class ConnectionDrawer extends Component {

  state= {
    visible: false
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  hideDrawer = () => {
    this.setState({
      visible: false
    });
  };



  render() {
    return (
        <div>

        </div>
    );
  }
}

export default ConnectionDrawer;