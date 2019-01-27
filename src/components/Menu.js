/** @jsx jsx */
import React from "react";
import { jsx, css } from '@emotion/core'
import styled from "@emotion/styled";

const menuDisplayStatus = (props) =>
  props.show
    ? css`
        display: flex;
      `
    : css`
        display: none;
      `;

const style = (props) => css`
  position: absolute;
  height: 40px;
  left: 20px;
  top: 20px;

  display: flex;
  align-items: center;

  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 0px 8px rgba(70, 84, 80, 0.3);

  a {
    text-decoration: none;
    color: black;
  }

  .breadcrumbs {
    text-align: left;
  }
`;

const MenuContainer = styled("div")`
  .contents {
    ${menuDisplayStatus};
  }
`;

const Menu = ({ children }) => (
  <MenuContainer className="menu" css={style}>
    <div className="breadcrumbs">
      <nav>
        <ul
          css={css`
            list-style-type: none;
            color: black;
            padding: 0 1em;
            margin: 0;
          `}
        >
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="contents grid">
      <div className="nav">
        <div className="collapsible">
          <header>
            <h2>Investigate</h2>
            <svg
              width="27"
              height="29"
              viewBox="0 0 27 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 28.6985V1.19849M13.5 1.19849L1 13.6985M13.5 1.19849L26 13.6985"
                stroke="black"
              />
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
        <div className="collapsible">
          <header>
            <h2>Participate</h2>
            <svg
              width="27"
              height="29"
              viewBox="0 0 27 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 28.6985V1.19849M13.5 1.19849L1 13.6985M13.5 1.19849L26 13.6985"
                stroke="black"
              />
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
          <svg
            width="21"
            height="14"
            viewBox="0 0 21 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 13.1985L9 5.19849L12.5 8.69849L20.5 0.698486M20.5 0.698486H15.5M20.5 0.698486V5.19849"
              stroke="black"
            />
          </svg>
          Trending
        </h4>
        <a href="/library/2012/01/01/example-article/" className="article-unit">
          {" "}
          <div
            className="article-cover-image"
            css={css`
              background-image: url(/assets/images/test-1.jpg);
            `}
          />
          <p className="article-title">Example Article</p>
        </a>
        <a href="/library/2012/01/01/example-article/" className="article-unit">
          {" "}
          <div
            className="article-cover-image"
            css={css`
              background-image: url(/assets/images/test-1.jpg);
            `}
          />
          <p className="article-title">Example Article</p>
        </a>
      </div>
      {children}
    </div>
  </MenuContainer>
);

export default Menu;
