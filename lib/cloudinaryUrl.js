'use strict';

exports.__esModule = true;
exports['default'] = cloudinaryUrl;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _cloudinaryLibUtils = require('cloudinary/lib/utils');

var _cloudinaryLibUtils2 = _interopRequireDefault(_cloudinaryLibUtils);

function cloudinaryUrl(publicId) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  return _cloudinaryLibUtils2['default'].url(public_id, options);
}

module.exports = exports['default'];