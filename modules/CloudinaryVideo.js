import React, { Component, PropTypes } from 'react';
import { video } from './cloudinary';

export default class CloudinaryVideo extends Component {
  render() {
    const { publicId } = this.props;
    const options = {
      controls: true,
      preload: 'auto',
    };
    return (
      <div dangerouslySetInnerHTML={{__html: video(publicId, options)}}></div>
    );
  }
}

CloudinaryVideo.propTypes = {
  publicId: PropTypes.string.isRequired,
};
