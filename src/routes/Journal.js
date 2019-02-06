import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Prismic from "prismic-javascript";
import PrismicReact from "prismic-reactjs";

import { RichText, Date } from "prismic-reactjs";
import NotFound from './NotFound';

import ArticleRow from '../components/ArticleRow';

export default class Journal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doc: null,
      notFound: false
    };
  }

  componentWillMount() {
    const apiEndpoint = "https://publicdomain.prismic.io/api/v2";

    Prismic.api(apiEndpoint).then(api => {
      api
        .query(Prismic.Predicates.at("document.type", "blog_post"))
        .then(response => {
          if (response) {
            this.setState({
              doc: response.results,
              notFound: !this.state.doc
            });
          }
        });
    });
  }

  render() {
    if (this.state.doc) {
      return (
        <div className="container">
          <section className="content-section grid">
            <div className="gc-s12">
              <h1 className="page-title">Journal</h1>
              <div className="pt-md">
                <input className="input-large" type="text" name="search" id="search" placeholder="Search by keyword, title, or author" />
              </div>
            </div>
            <div className="gc-s12">
              <div className="pt-md section-header">
                <h3>Containers</h3>
              </div>
              <div className="grid pt-sm">
                <div className="gc-s3">
                  <Link to="/journal/systems/" className="journal-container-link journal-container-link--systems">
                    <svg width="47" height="42" viewBox="0 0 47 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.3814 0.565674L46.7628 41.0635H3.58047e-08L23.3814 0.565674Z" fill="#27AE60" />
                    </svg>
                    <h2>Systems</h2>
                  </Link>
                </div>
                <div className="gc-s3">
                  <a href="" className="journal-container-link journal-container-link--practices">
                    <svg width="40" height="46" viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.4385 0.185303L39.924 11.4353V33.9353L20.4385 45.1853L0.952905 33.9353V11.4353L20.4385 0.185303Z" fill="#C4C4C4" />
                      <path d="M20.4385 0.185303L39.924 11.4353V33.9353L20.4385 45.1853L0.952905 33.9353V11.4353L20.4385 0.185303Z" fill="#2F80ED" />
                    </svg>
                    <h2>Practices</h2>
                  </a>
                </div>
                <div className="gc-s3">
                  <a href="" className="journal-container-link journal-container-link--spaces">
                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="20.9971" cy="20.1853" r="20" fill="#F2304B" />
                    </svg>
                    <h2>Spaces</h2>
                  </a>
                </div>
                <div className="gc-s3">
                  <a href="" className="journal-container-link journal-container-link--dialogues">
                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.4359 20.1853L0.435547 0.185303H40.4359L20.4359 20.1853Z" fill="#17CED4" />
                      <path d="M20.4361 20.1853L40.4365 40.1853L0.436134 40.1853L20.4361 20.1853Z" fill="#17CED4" />
                    </svg>
                    <h2>Dialogues</h2>
                  </a>
                </div>
              </div>
            </div>
            <div className="gc-s12">
              <div className="pt-md section-header">
                <h3><svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 13.1985L9 5.19849L12.5 8.69849L20.5 0.698486M20.5 0.698486H15.5M20.5 0.698486V5.19849" stroke="black"></path>
                </svg>Trending</h3>
              </div>

              <div className="grid">
                {this.state.doc.map(post => (
                  <ArticleRow key={post.uid} post={post} />
                ))}
              </div>
            </div>
          </section>
        </div>
      )
    } else if (this.state.notFound) {
      return (
        <NotFound />
      )
    } else {
      return <h1>Loading</h1>;
    }
  }
}