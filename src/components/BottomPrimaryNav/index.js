import React, { Component } from 'react';
import Left from './Left';
import Right from './Right';

class BottomPrimaryNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="primary-nav">
      <Left />
      <Right />
    </div>;
  }
}

export default BottomPrimaryNav;