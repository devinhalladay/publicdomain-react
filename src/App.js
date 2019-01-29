import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Menu from './components/Menu';
import Controls from './components/Controls';
import BottomPrimaryNav from './components/BottomPrimaryNav/index';
import Logo from './components/Logo.svg';

import Home from './routes/Home'
import Investigate from './routes/Investigate'

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
    return <Router>
        <div className="App">
          <Menu show={this.state.showMenu} />
          <Controls showMenuHandler={this.showMenu} />

          <Route exact path="/" component={Home} />
          <Route exact path="/investigate" component={Investigate} />
        </div>
      </Router>
  }
}

export default App;
