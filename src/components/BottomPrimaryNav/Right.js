import React, { Component } from "react";

class Right extends Component {
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
          this.state.hover ? "primary-nav--right hovered" : "primary-nav--right"
        }
        onMouseEnter={this.hoverOn}
        onMouseLeave={this.hoverOff}
      >
        <p>Participate</p>
        <div className="arrow">
          <div className="arrow--line" />
          <div className="arrow--chevron" />
        </div>
      </div>
    );
  }
}

export default Right;
