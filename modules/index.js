const cloudinary = require('./cloudinary');

export function cloudinaryConfig(config) {
  cloudinary.config(config);
}

export function cloudinaryUrl(publicId, options) {
  cloudinary.url(publicId, options);
}

export CloudinaryImage from './CloudinaryImage';
export CloudinaryVideo from './CloudinaryVideo';

export CloudinaryImageNative from './CloudinaryImageNative';
