import React, { Component } from 'react';
import Menu from './components/Menu';
import Controls from './components/Controls';
import { Global, css } from "@emotion/core";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showNav: true
    };
  }

  handleShowMenu = () => {
    this.setState(state => ({ showNav: !state.showNav }));
  }

  render() {
    return (
      <div>
        <Global styles={css`
            body {
              font-family: "Neue Haas Unica Pro";
              color: black;
            }`} />
        <Menu show={this.state.showNav}/>
        <Controls showMenu={this.handleShowMenu} />
      </div>
    );
  }
}

export default App;
