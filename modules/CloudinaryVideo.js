import React, { Component, PropTypes } from 'react';
const cloudinary = require('./cloudinary');

export default class CloudinaryVideo extends Component {
  componentDidMount() {
    const { publicId, options } = this.props;
    this.refs.video.insertBefore(cloudinary.video(publicId, options), null);
  }

  render() {
    return (
      <div ref="video"></div>
    );
  }
}

CloudinaryVideo.propTypes = {
  publicId: PropTypes.string.isRequired,
  options: PropTypes.object,
};
