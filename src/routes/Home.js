import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Menu from '../components/Menu';
import Controls from '../components/Controls';
import BottomPrimaryNav from '../components/BottomPrimaryNav/index';
import Logo from '../components/Logo.svg';

import Investigate from './Investigate';

class Home extends Component {
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
    return <React.Fragment>
        <section className="center">
          <img src={Logo} alt="Public Domain Logo" />
        </section>
        <BottomPrimaryNav />
      </React.Fragment>;
  }
}

export default Home;
