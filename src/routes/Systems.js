import React, { Component } from 'react';

import Prismic from "prismic-javascript";
import PrismicReact from "prismic-reactjs";
import NotFound from './NotFound';

import ArticleRow from '../components/ArticleRow';


export default class Systems extends Component {
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
              <h1 className="page-title"><svg width="47" height="42" viewBox="0 0 47 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.3814 0.565674L46.7628 41.0635H3.58047e-08L23.3814 0.565674Z" fill="#27AE60" />
              </svg> Systems</h1>
            </div>
            <div className="grid">
              {this.state.doc.map(post => {
                console.log(post)
                if (post.data.container == 'Systems') {
                return (
                  <ArticleRow key={post.uid} post={post} />
                )
                }
              }
              )}
            </div>
          </section>
        </div>
      )
    } else if (this.state.notFound) {
      return (
        <NotFound />
      )
    } else {
      return (
        <div>Loading…</div>
      )
    }
    
  }
}