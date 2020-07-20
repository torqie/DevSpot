import React, { Component } from "react";
import { Card, List, Avatar } from "antd";

class NewConnectionsCard extends Component {
  state = {
    fo
  }

  render() {
    return (
        <div>
          <Card>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                          title={<a href="https://ant.design">{item.title}</a>}
                          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                      />
                    </List.Item>
                )}
            />
          </Card>
        </div>
    );
  }
}

export default NewConnectionsCard;