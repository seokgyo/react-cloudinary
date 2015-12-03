const _ = require('lodash');

const cloudinary = {
  utils: require('cloudinary/lib/utils'),
};

/**
 * Creates an HTML video tag for the provided public_id
 * @param {String} public_id the resource public ID
 * @param {Object} [options] options for the resource and HTML tag
 * @param {(String|Array<String>)} [options.source_types] Specify which
 *        source type the tag should include. defaults to webm, mp4 and ogv.
 * @param {String} [options.source_transformation] specific transformations
 *        to use for a specific source type.
 * @param {(String|Object)} [options.poster] image URL or
 *        poster options that may include a <tt>public_id</tt> key and
 *        poster-specific transformations
 * @example <caption>Example of generating a video tag:</caption>
 * $.cloudinary.video("mymovie.mp4");
 * $.cloudinary.video("mymovie.mp4", {source_types: 'webm'});
 * $.cloudinary.video("mymovie.ogv", {poster: "myspecialplaceholder.jpg"});
 * $.cloudinary.video("mymovie.webm", {source_types: ['webm', 'mp4'], poster: {effect: 'sepia'}});
 * @return {string} HTML video tag
 */
module.exports = function (public_id, options) {
  var src, video_options, fallback, source_transformation, source_types, source, multi_source, html;
  options = _.extend({}, options);
  public_id = public_id.replace(/\.(mp4|ogv|webm)$/, '');
  source_types = cloudinary.utils.option_consume(options, 'source_types', []);
  source_transformation = cloudinary.utils.option_consume(options, 'source_transformation', {});
  fallback = cloudinary.utils.option_consume(options, 'fallback_content', '');

  if (source_types.length === 0) source_types = cloudinary.utils.DEFAULT_VIDEO_SOURCE_TYPES;
  video_options = _.cloneDeep(options);

  if (video_options.hasOwnProperty('poster')) {
    if (_.isPlainObject(video_options.poster)) {
      if (video_options.poster.hasOwnProperty('public_id')) {
        video_options.poster = cloudinary.utils.url(video_options.poster.public_id, video_options.poster);
      } else {
        video_options.poster = cloudinary.utils.url(public_id, _.extend({}, cloudinary.utils.DEFAULT_POSTER_OPTIONS, video_options.poster));
      }
    }
  } else {
    video_options.poster = cloudinary.utils.url(public_id, _.extend({}, cloudinary.utils.DEFAULT_POSTER_OPTIONS, options));
  }

  if (!video_options.poster) delete video_options.poster;

  html = '<video ';

  if (!video_options.hasOwnProperty('resource_type')) video_options.resource_type = 'video';
  multi_source = _.isArray(source_types) && source_types.length > 1;
  source = public_id;
  if (!multi_source) {
    source = source + '.' + cloudinary.utils.build_array(source_types)[0];
  }
  src = cloudinary.utils.url(source, video_options);
  if (!multi_source) video_options.src = src;
  if (video_options.hasOwnProperty("html_width")) video_options.width = cloudinary.utils.option_consume(video_options, 'html_width');
  if (video_options.hasOwnProperty("html_height")) video_options.height = cloudinary.utils.option_consume(video_options, 'html_height');
  html = html + cloudinary.utils.html_attrs(video_options) + '>';
  if (multi_source) {
    var source_type, transformation, video_type, mime_type;
    for (var i = 0; i < source_types.length; i++) {
      source_type = source_types[i];
      transformation = source_transformation[source_type] || {};
      src = cloudinary.utils.url(source + "." + source_type, _.extend({resource_type: 'video'}, _.cloneDeep(options), _.cloneDeep(transformation)));
      video_type = source_type === 'ogv' ? 'ogg' : source_type;
      mime_type = "video/" + video_type;
      html = html + '<source ' + cloudinary.utils.html_attrs({
        src: src,
        type: mime_type
      }) + '>';
    }
  }

  html = html + fallback;
  html = html + '</video>';
  return html;
};
