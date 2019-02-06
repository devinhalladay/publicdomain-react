import React, { Component } from 'react';

import NotFound from "./NotFound";
import PrismicReact from "prismic-reactjs";

export default class JournalPost extends Component {
  state = {
    doc: null,
    notFound: false
  };
  componentWillMount() {
    this.fetchPage(this.props);
  }
  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }
  fetchPage(props) {
    if (props.prismicCtx) {
      // We are using the function to get a document by its uid
      return props.prismicCtx.api.getByUID(
        "blog_post",
        props.match.params.uid,
        {},
        (err, doc) => {
          if (doc) {
            // We put the retrieved content in the state as a doc variable
            this.setState({ doc });
          } else {
            // We changed the state to display error not found if no matched doc
            this.setState({ notFound: !doc });
          }
        }
      );
    }
    return null;
  }

  render() {
    if (this.state.doc) {
      return (
        <React.Fragment>
          <div className="container">
            <div className="grid">
              <div className="gc-s12">
                <h1 className="page-title">{PrismicReact.RichText.asText(this.state.doc.data.title)}</h1>
              </div>
              <div className="gc-s5"></div>
              <article className="gc-s5">
                {PrismicReact.RichText.render(this.state.doc.data.body, this.props.prismicCtx.linkResolver)}
              </article>
            </div>
          </div>
        </React.Fragment>
      )
    } else if (this.state.notFound) {
      return (
        <NotFound />
      )
    }
    return <h1>Loading</h1>;
  }
}