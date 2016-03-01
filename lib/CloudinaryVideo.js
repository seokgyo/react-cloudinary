'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var cloudinary = require('./cloudinary');

var CloudinaryVideo = (function (_Component) {
  _inherits(CloudinaryVideo, _Component);

  function CloudinaryVideo() {
    _classCallCheck(this, CloudinaryVideo);

    _Component.apply(this, arguments);
  }

  CloudinaryVideo.prototype.componentDidMount = function componentDidMount() {
    var _props = this.props;
    var publicId = _props.publicId;
    var options = _props.options;

    this.refs.video.insertBefore(cloudinary.video(publicId, options), null);
  };

  CloudinaryVideo.prototype.render = function render() {
    return _react2['default'].createElement('div', { ref: 'video' });
  };

  return CloudinaryVideo;
})(_react.Component);

exports['default'] = CloudinaryVideo;

CloudinaryVideo.propTypes = {
  publicId: _react.PropTypes.string.isRequired,
  options: _react.PropTypes.object
};
module.exports = exports['default'];