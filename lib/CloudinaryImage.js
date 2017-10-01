'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var cloudinary = require('./cloudinary');

var CloudinaryImage = (function (_Component) {
  _inherits(CloudinaryImage, _Component);

  function CloudinaryImage() {
    _classCallCheck(this, CloudinaryImage);

    _Component.apply(this, arguments);
  }

  CloudinaryImage.prototype.render = function render() {
    var _props = this.props;
    var publicId = _props.publicId;
    var options = _props.options;

    var other = _objectWithoutProperties(_props, ['publicId', 'options']);

    return _react2['default'].createElement('img', _extends({}, other, { src: cloudinary.url(publicId, options) }));
  };

  _createClass(CloudinaryImage, null, [{
    key: 'propTypes',
    value: {
      publicId: _propTypes2['default'].string.isRequired,
      options: _propTypes2['default'].object
    },
    enumerable: true
  }]);

  return CloudinaryImage;
})(_react.Component);

exports['default'] = CloudinaryImage;
module.exports = exports['default'];