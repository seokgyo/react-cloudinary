'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cloudinaryLibUtils = require('cloudinary/lib/utils');

var _cloudinaryLibUtils2 = _interopRequireDefault(_cloudinaryLibUtils);

var _cloudinaryUrl = require('./cloudinaryUrl');

var _cloudinaryUrl2 = _interopRequireDefault(_cloudinaryUrl);

var _lodashObjectAssign = require('lodash/object/assign');

var _lodashObjectAssign2 = _interopRequireDefault(_lodashObjectAssign);

var CloudinaryImage = (function (_Component) {
  _inherits(CloudinaryImage, _Component);

  function CloudinaryImage() {
    _classCallCheck(this, CloudinaryImage);

    _Component.apply(this, arguments);
  }

  CloudinaryImage.prototype.render = function render() {
    var publicId = this.props.publicId;

    var options = _lodashObjectAssign2['default']({}, this.props.options);
    if ('html_width' in options) options.width = _cloudinaryLibUtils2['default'].option_consume(options, 'html_width');
    if ('html_height' in options) options.height = _cloudinaryLibUtils2['default'].option_consume(options, 'html_height');

    return _react2['default'].createElement('img', _extends({ src: _cloudinaryUrl2['default'](publicId, options) }, _cloudinaryLibUtils2['default'].html_attrs(options), this.props));
  };

  return CloudinaryImage;
})(_react.Component);

exports['default'] = CloudinaryImage;

CloudinaryImage.propTypes = {
  publicId: _react.PropTypes.string.isRequired,
  options: _react.PropTypes.object
};
module.exports = exports['default'];