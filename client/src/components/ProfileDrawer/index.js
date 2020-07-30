import React, { Component } from "react";
import { Drawer } from 'antd';

class ProfileDrawer extends Component {
  state = {
    visible: false
  }

  componentDidMount() {
    this.setState({visible: this.props.profileDrawerVisible})
  }

  render() {
    return (
        <div>
          <Drawer
              width={640}
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
          >
            <h1>Welcome Home</h1>
          </Drawer>
        </div>
    );
  }
}

export default ProfileDrawer;