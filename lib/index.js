'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _cloudinary = require('./cloudinary');

exports.cloudinaryConfig = _cloudinary.config;

var _CloudinaryImage2 = require('./CloudinaryImage');

var _CloudinaryImage3 = _interopRequireDefault(_CloudinaryImage2);

exports.CloudinaryImage = _CloudinaryImage3['default'];

var _CloudinaryVideo2 = require('./CloudinaryVideo');

var _CloudinaryVideo3 = _interopRequireDefault(_CloudinaryVideo2);

exports.CloudinaryVideo = _CloudinaryVideo3['default'];