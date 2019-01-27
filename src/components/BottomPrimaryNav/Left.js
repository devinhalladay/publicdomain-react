import React, { Component } from "react";

class Left extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };

    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
  }

  hoverOn() {
    this.setState({ hover: true });
  }

  hoverOff() {
    this.setState({ hover: false });
  }

  render() {
    return (
      <div
        className={
          this.state.hover ? "primary-nav--left hovered" : "primary-nav--left"
        }
        onMouseEnter={this.hoverOn}
        onMouseLeave={this.hoverOff}
      >
        <div className="arrow">
          <div className="arrow--chevron" />
          <div className="arrow--line" />
        </div>
        <p>Investigate</p>
      </div>
    );
  }
}

export default Left;
