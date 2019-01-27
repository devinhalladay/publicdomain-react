/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

function openMenu() {
  // setState({ navStatus: !state.navStatus });
  console.log('test')
};

const Controls = (props) => (
  <div
    className="cockpit"
    css={css`
      position: absolute;
      height: 40px;
      right: 20px;
      top: 20px;

      background: #ffffff;
      border: 1px solid #000000;
      box-sizing: border-box;
      box-shadow: 0px 0px 8px rgba(70, 84, 80, 0.3);

      padding: 0 1em;

      align-items: center;
      display: flex;

      a {
        margin-top: 5px;

        &:not(:last-child) {
          padding-right: 1em;
        }
      }
    `}
  >
    <a href="#">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 19L13 13"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
    <a className="menu-link" onClick={() => props.showMenu() }>
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 10H21"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 1H21"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 19H21"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  </div>
);

export default Controls;