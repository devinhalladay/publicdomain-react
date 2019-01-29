import React, { Component } from 'react';

export default class Journals extends Component {
  render() {
    return (
      <div class="container">
        <section class="content-section grid">
          <div class="gc-s12">
            <h1 class="page-title">Journals</h1>
            <div class="pt-md">
              <input class="input-large" type="text" name="search" id="search" placeholder="Search by keyword, title, or author" />
      </div>
            </div>
            <div class="gc-s12">
              <div class="pt-md section-header">
                <h3>Containers</h3>
              </div>
              <div class="grid pt-sm">
                <div class="gc-s3">
                  <a href="" class="journal-container-link journal-container-link--systems">
                    <svg width="47" height="42" viewBox="0 0 47 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.3814 0.565674L46.7628 41.0635H3.58047e-08L23.3814 0.565674Z" fill="#27AE60" />
                    </svg>
                    <h2>Systems</h2>
                  </a>
                </div>
                <div class="gc-s3">
                  <a href="" class="journal-container-link journal-container-link--practices">
                    <svg width="40" height="46" viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.4385 0.185303L39.924 11.4353V33.9353L20.4385 45.1853L0.952905 33.9353V11.4353L20.4385 0.185303Z" fill="#C4C4C4" />
                      <path d="M20.4385 0.185303L39.924 11.4353V33.9353L20.4385 45.1853L0.952905 33.9353V11.4353L20.4385 0.185303Z" fill="#2F80ED" />
                    </svg>
                    <h2>Practices</h2>
                  </a>
                </div>
                <div class="gc-s3">
                  <a href="" class="journal-container-link journal-container-link--spaces">
                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="20.9971" cy="20.1853" r="20" fill="#F2304B" />
                    </svg>
                    <h2>Spaces</h2>
                  </a>
                </div>
                <div class="gc-s3">
                  <a href="" class="journal-container-link journal-container-link--dialogues">
                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.4359 20.1853L0.435547 0.185303H40.4359L20.4359 20.1853Z" fill="#17CED4" />
                      <path d="M20.4361 20.1853L40.4365 40.1853L0.436134 40.1853L20.4361 20.1853Z" fill="#17CED4" />
                    </svg>
                    <h2>Dialogues</h2>
                  </a>
                </div>
              </div>
            </div>
            <div class="gc-s12">
              <div class="pt-md section-header">
                <h3><svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 13.1985L9 5.19849L12.5 8.69849L20.5 0.698486M20.5 0.698486H15.5M20.5 0.698486V5.19849" stroke="black"></path>
                </svg>Trending</h3>
              </div>

              <div class="grid">
                {/* <% blog('journal').articles.each do |article| %>
          <div class="gc-s12 article-row">
                  <% link_to article, :class => '' do %>
              <% if article.data.cover_image %>
                <img class="article-thumbnail" src="/assets/images/<%= article.data.cover_image %>" alt="">
                    <% end %>
              <div class="article-info">
                      <div class="article-author"><%= article.data.author %></div>
                      <p class="article-title"><%= article.title %></p>
                    </div>
                    <% end %>
          </div>
                  <% end %> */}
      </div>
              </div>
  </section>
          </div>
    )
  }
}