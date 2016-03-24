'use strict';

exports.__esModule = true;
exports.cloudinaryConfig = cloudinaryConfig;
exports.cloudinaryUrl = cloudinaryUrl;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var cloudinary = require('./cloudinary');

function cloudinaryConfig(config) {
  cloudinary.config(config);
}

function cloudinaryUrl(publicId, options) {
  cloudinary.url(publicId, options);
}

var _CloudinaryImage2 = require('./CloudinaryImage');

var _CloudinaryImage3 = _interopRequireDefault(_CloudinaryImage2);

exports.CloudinaryImage = _CloudinaryImage3['default'];

var _CloudinaryVideo2 = require('./CloudinaryVideo');

var _CloudinaryVideo3 = _interopRequireDefault(_CloudinaryVideo2);

exports.CloudinaryVideo = _CloudinaryVideo3['default'];

var _CloudinaryImageNative2 = require('./CloudinaryImageNative');

var _CloudinaryImageNative3 = _interopRequireDefault(_CloudinaryImageNative2);

exports.CloudinaryImageNative = _CloudinaryImageNative3['default'];