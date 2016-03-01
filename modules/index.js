const cloudinary = require('./cloudinary');

exports.cloudinaryConfig = (config) => cloudinary.config(config);
exports.cloudinaryUrl = (publicId, options) => cloudinary.url(publicId, options);

exports.CloudinaryImage = require('./CloudinaryImage');
exports.CloudinaryVideo = require('./CloudinaryVideo');
