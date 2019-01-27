import React, { Component } from 'react';
import Menu from './components/Menu'
import Controls from './components/Controls'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
  }

  showMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }
  
  render() {
    return (
      <div className="App">
        <Menu show={this.state.showMenu}/>
        <Controls showMenuHandler={this.showMenu} />
      </div>
    );
  }
}

export default App;
