import React, { Component, PropTypes } from 'react';
import { Image } from 'react-native';
const cloudinary = require('./cloudinary');

export default class CloudinaryImage extends Component {
  static propTypes = {
    publicId: PropTypes.string.isRequired,
    options: PropTypes.object,
  }

  render() {
    const { publicId, options, ...other } = this.props;

    return (
      <Image {...other} source={{ uri: cloudinary.url(publicId, options)}} />
    );
  }
}
