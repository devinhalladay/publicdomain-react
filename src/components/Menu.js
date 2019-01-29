import React, { Component } from 'react';

// import styled from "styled-components";

// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
  }

  expand() {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    return (
      <div onClick={ () => this.expand() } className={this.state.expanded ? `collapsible expanded` : `collapsible`}>
        <header>
          <h2>{this.props.title}</h2>
          <svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 28.6985V1.19849M13.5 1.19849L1 13.6985M13.5 1.19849L26 13.6985" stroke="black" />
          </svg>
        </header>
        <div className="collapsible-content">
          <ul>
            <li>
              <a href="#">Test</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

class Menu extends Component {
  render() {
    return <div className={this.props.show ? `menu open` : `menu`}>
        <div className="breadcrumbs">
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="contents grid">
          <div className="nav">
            <Collapsible title="Investigate" />
            <Collapsible title="Participate" />
            <h3>
              <a href="#">About</a>
            </h3>
            <h3>
              <a href="#">Partners</a>
            </h3>
          </div>
          <div className="gc-s1" />
          <div className="trending">
            <h4 className="trending-header">
              <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13.1985L9 5.19849L12.5 8.69849L20.5 0.698486M20.5 0.698486H15.5M20.5 0.698486V5.19849" stroke="black" />
              </svg>
              Trending
            </h4>
            <a href="/library/2012/01/01/example-article/" className="article-unit">
              <div className="article-cover-image" style={{backgroundImage: 'url(/images/test-1.jpg)'}} />
              <p className="article-title">Example Article</p>
            </a>
            <a href="/library/2012/01/01/example-article/" className="article-unit">
              {" "}
            <div className="article-cover-image" style={{ backgroundImage: 'url(/images/test-1.jpg)' }} />
              <p className="article-title">Example Article</p>
            </a>
          </div>
        </div>
      </div>;
  }
}

export default Menu;