'use strict';

var cloudinary = require('./cloudinary');

exports.cloudinaryConfig = function (config) {
  return cloudinary.config(config);
};
exports.cloudinaryUrl = function (publicId, options) {
  return cloudinary.url(publicId, options);
};

exports.CloudinaryImage = require('./CloudinaryImage');
exports.CloudinaryVideo = require('./CloudinaryVideo');