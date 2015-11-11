import React, { Component } from 'react';

class Photo extends Component {
  render() {
    const { photos, caption } = this.props;

    return (
      <div className="photo">
        <figure className="photo__figure">
          <img data-src={photos.url} alt="" width={photos.width} height={photos.height} data-action="zoom" />
          <figcaption className="photo__caption" dangerouslySetInnerHTML={{__html: caption}} />
        </figure>
      </div>
    );
  }
}

class Text extends Component {
  rawMarkup() {
    return { __html: this.props.body };
  }
  render() {
    return (
      <div className="text" dangerouslySetInnerHTML={this.rawMarkup()} />
    );
  }
}

class Links extends Component {
  render() {
    const { url, title, publisher, photos, excerpt } = this.props;

    return (
      <div className="link">
        {
          photos &&
          <img data-src={photos[0].original_size.url} alt="" width={photos[0].original_size.width} height={photos[0].original_size.height} data-action="zoom" className="link__thumbnail" />
        }
        <a href={url} className="link__box">
          <div className="link__meta">
            <strong className="link__name">{title}</strong>
            <span className="link__host">{publisher}</span>
            <p className="link__excerpt">{excerpt}</p>
          </div>
        </a>
      </div>
    );
  }
}

export default {
  photo: Photo,
  links: Links,
  text: Text
};
