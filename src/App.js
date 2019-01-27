import React, { Component } from 'react';
import Menu from './components/Menu'
import Controls from './components/Controls'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showMenu: false
    };
  }
  
  render() {
    return (
      <div className="App">
        <Menu show={this.state.showMenu}/>
        <Controls />
      </div>
    );
  }
}

export default App;
