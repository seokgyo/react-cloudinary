import React, { Component } from 'react';
import PropTypes from 'prop-types';
const cloudinary = require('./cloudinary');

export default class CloudinaryImage extends Component {
  static propTypes = {
    publicId: PropTypes.string.isRequired,
    options: PropTypes.object,
  }

  render() {
    const { publicId, options, ...other } = this.props;

    return (
      <img {...other} src={cloudinary.url(publicId, options)} />
    );
  }
}
