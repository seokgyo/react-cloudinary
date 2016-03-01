import React, { Component, PropTypes } from 'react';
const cloudinary = require('./cloudinary');

class CloudinaryImage extends Component {
  render() {
    const { publicId } = this.props;
    const options = Object.assign({}, this.props.options);

    return (
      <img src={cloudinary.url(publicId, options)} />
    );
  }
}

CloudinaryImage.propTypes = {
  publicId: PropTypes.string.isRequired,
  options: PropTypes.object,
};
