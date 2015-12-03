import React, { Component, PropTypes } from 'react';
import utils from 'cloudinary/lib/utils';
import cloudinaryUrl from './cloudinaryUrl';

export default class CloudinaryImage extends Component {
  render() {
    const { publicId, options } = this.props;
    if ('html_width' in options) options.width = utils.option_consume(options, 'html_width');
    if ('html_height' in options) options.height = utils.option_consume(options, 'html_height');

    return (
      <img src={cloudinaryUrl(publicId, options)} {...utils.html_attrs(options)}/>
    );
  }
}

CloudinaryImage.propTypes = {
  publicId: PropTypes.string.isRequired,
  options: PropTypes.object,
};
