import React, { Component, PropTypes } from 'react';
const cloudinary = require('./cloudinary');

export default class CloudinaryImage extends Component {
  render() {
    const { publicId, options } = this.props;

    return (
      <img src={cloudinary.url(publicId, options)} />
    );
  }
}

CloudinaryImage.propTypes = {
  publicId: PropTypes.string.isRequired,
  options: PropTypes.object,
};
