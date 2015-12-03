import React, { Component, PropTypes } from 'react';

export default class CloudinaryVideo extends Component {
  render() {
    const { publicId, options } = this.props;
    return (
      <div dangerouslySetInnerHTML={{__html: video(publicId, options)}}></div>
    );
  }
}

CloudinaryVideo.propTypes = {
  publicId: PropTypes.string.isRequired,
  options: PropTypes.object,
};
