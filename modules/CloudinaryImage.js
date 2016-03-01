import React, { Component, PropTypes } from 'react';
import utils from 'cloudinary/lib/utils';
import cloudinaryUrl from './cloudinaryUrl';
import assign from 'lodash/object/assign';

export default class CloudinaryImage extends Component {
  render() {
    const { publicId } = this.props;
    const options = assign({}, this.props.options);
    if ('html_width' in options) options.width = utils.option_consume(options, 'html_width');
    if ('html_height' in options) options.height = utils.option_consume(options, 'html_height');

    return (
      <img src={cloudinaryUrl(publicId, options)} {...utils.html_attrs(options)} {...this.props}/>
    );
  }
}

CloudinaryImage.propTypes = {
  publicId: PropTypes.string.isRequired,
  options: PropTypes.object,
};
