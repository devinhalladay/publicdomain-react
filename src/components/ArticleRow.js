import React, { Component } from 'react';
import PrismicReact from "prismic-reactjs";

export default class ArticleRow extends Component {
  render() {
    let post = this.props.post;
    console.log(post);
    return (
      <div className="gc-s12 article-row">
        <a href={`/journal/${post.data.container}/${post.uid}`}>
          {post.data.cover_image &&
            <img className="article-thumbnail" src={post.data.cover_image.url} alt="" />
          }
          <div className="article-info">
            <div className="article-author">
              {PrismicReact.RichText.asText(post.data.author)}
            </div>
            <div className="article-title">
              {PrismicReact.RichText.asText(post.data.title)}
            </div>
          </div>
        </a>
      </div>
    )
  }
}