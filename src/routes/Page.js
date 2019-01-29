import React from "react";
import NotFound from "./NotFound";
import PrismicReact from "prismic-reactjs";
// Declare your component
export default class Page extends React.Component {
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
        "page",
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
        <div data-wio-id={this.state.doc.id}>
          {/* This is how to get an image into your template */}
          <img alt="cover" src={this.state.doc.data.image.url} />
          {/* This is how to insert a Rich Text field as plain text */}
          <h1>{PrismicReact.RichText.asText(this.state.doc.data.title)}</h1>
          {/* This is how to insert a Rich Text field into your template as html */}
          {PrismicReact.RichText.render(this.state.doc.data.description, this.props.prismicCtx.linkResolver)}
        </div>
      );
    } else if (this.state.notFound) {
      return <NotFound />;
    }
    return <h1>Loading</h1>;
  }
}
