import React, { Component } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaSwatchbook } from "react-icons/fa";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

class ThemeSwitcher extends Component {
  state = {
    theme: 'default'
  };
  componentDidMount() {
    document.body.classList.add('theme-default');
  }

  updateTheme = event => {
    const currentTheme = 'theme-'+this.state.theme;
    const theme = event;
    console.log(currentTheme);
    const newTheme = 'theme-' + theme;
    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);
    this.setState({theme: theme})
  };

  render() {
    return (
        <div>
          <NavDropdown title={

            <OverlayTrigger
            key="switchThemes"
            placement="bottom"
            overlay={<Tooltip id='tooltip-switchthemes'>Switch Themes</Tooltip>}
            >
              <FaSwatchbook />
            </OverlayTrigger>
          } id="updateTheme" alignRight onSelect={this.updateTheme}>
            <NavDropdown.Item eventKey="default" value="red">Default Theme</NavDropdown.Item>
            <NavDropdown.Item eventKey="red" value="red">Red Theme</NavDropdown.Item>
            <NavDropdown.Item eventKey="blue" value="blue">Blue Theme</NavDropdown.Item>

          </NavDropdown>
        </div>
    );
  }
}

export default ThemeSwitcher;