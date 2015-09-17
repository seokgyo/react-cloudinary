import React, { Component, PropTypes } from 'react';
import { image } from './cloudinary';

export default class CloudinaryImage extends Component {
  render() {
    const { publicId } = this.props;
    return (
      <div dangerouslySetInnerHTML={{__html: image(publicId)}}></div>
    );
  }
}

CloudinaryImage.propTypes = {
  publicId: PropTypes.string.isRequired,
};
