import utils from 'cloudinary/lib/utils';

export default function cloudinaryUrl(publicId, options = {}) {
  return utils.url(publicId, options);
}
