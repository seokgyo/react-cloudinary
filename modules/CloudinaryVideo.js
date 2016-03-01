import React, { Component, PropTypes } from 'react';
const cloudinary = require('./cloudinary');

export default class CloudinaryVideo extends Component {
  static propTypes = {
    publicId: PropTypes.string.isRequired,
    options: PropTypes.object,
  }

  componentDidMount() {
    const { publicId, options } = this.props;
    this.refs.video.insertBefore(cloudinary.video(publicId, options), null);
  }

  render() {
    const { publicId, options, ...other } = this.props;
    return (
      <div {...other} ref="video"></div>
    );
  }
}
