import React, { Component } from 'react';

import Prismic from 'prismic-javascript';
import { Link, RichText, Date } from 'prismic-reactjs';

class Investigate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doc: null
    };
  }

  componentWillMount() {
    const apiEndpoint = "https://publicdomain.prismic.io/api/v2";

    Prismic.api(apiEndpoint).then(api => {
      api
        .query(Prismic.Predicates.at("document.type", "blog_post"))
        .then(response => {
          if (response) {
            this.setState({ doc: response.results[0] });
          }
        });
    });
  }

  linkResolver(doc) {
    // Define the url depending on the document type
    if (doc.type === "page") {
      return "/" + doc.uid;
    } else if (doc.type === "blog_post") {
      return "/blog/" + doc.uid;
    }

    // Default to homepage
    return "/";
  }

  render() {
    if (this.state.doc) {
      const document = this.state.doc.data;
      
      return <div className="container">
          <section className="content-section grid">
            <div className="gc-s12">
              <h1 className="page-title">Investigate</h1>
            </div>

            <div className="gc-s4 bt">
              <div className="content-category-container">
                <a href="/library">
                  <div className="browse-link">Browse</div>
                  <h2>Library</h2>
                </a>
                <a href="/" className="article-unit">
                  <div className="article-cover-image" style={{ backgroundImage: "url(/images/test-1.jpg" }} />
                  <p className="article-title">Test</p>
                </a>
              </div>
            </div>

            <div className="gc-s4 bt">
              <div className="content-category-container">
                <a href="/journals">
                  <div className="browse-link">Browse</div>
                  <h2>Journals</h2>
                </a>
                <a href="/" className="article-unit">
                <div className="article-cover-image" style={{ backgroundImage: `url(${document.cover_image.url})` }} />
                  <p className="article-title">
                    {RichText.asText(document.title)}
                  </p>
                </a>
              </div>
            </div>

            <div className="gc-s4 bt">
              <div className="content-category-container">
                <a href="/events">
                  <div className="browse-link">Browse</div>
                  <h2>Events</h2>
                </a>
                <a href="/" className="article-unit">
                  <div className="article-cover-image" style={{ backgroundImage: "url(/images/test-1.jpg" }} />
                  <p className="article-title">Test</p>
                </a>
              </div>
            </div>
          </section>

          <section className="content-section grid">
            <div className="gc-s12">
              <h1>Explore the Library</h1>
            </div>
            <div className="gc-s12">
              <div className="grid bt pt-md">
                <div className="gc-s6">
                  <a href="/library" className="primary-cta">
                    Browse Our Collections
                  </a>
                </div>
                <div className="gc-s6">
                  <input className="input-large" type="text" name="search" id="search" placeholder="Search by keyword, title, or author" />
                </div>
              </div>
            </div>

            <div className="gc-s12">
              <div className="pt-lg section-header">
                <h3>Featured Collections</h3>
              </div>
              <div className="grid pt-sm">
                <div className="gc-s4">
                  <a href="#" className="secondary-cta">
                    Gilles Deleuze
                  </a>
                </div>
                <div className="gc-s4">
                  <a href="#" className="secondary-cta">
                    Public Architecture
                  </a>
                </div>
                <div className="gc-s4">
                  <a href="#" className="secondary-cta">
                    Guerilla Publishing
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>;
    }


    return (
      <React.Fragment></React.Fragment>
    )
    
  }
}

export default Investigate;