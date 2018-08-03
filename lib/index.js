'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockServer = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _channel = require('./channel');

var _httpAdapter = require('./components/http-adapter');

var _httpAdapter2 = _interopRequireDefault(_httpAdapter);

var _constant = require('./constant');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reactHandler = function reactHandler(channel) {
  return function (getStory) {
    return function (context) {
      var initialContent = getStory(context);
      var props = { context: context, getStory: getStory, channel: channel, initialContent: initialContent };
      return _react2.default.createElement(_httpAdapter2.default, props);
    };
  };
};

var adapterHttpWrapper = function adapterHttpWrapper(options) {
  var channel = (0, _channel.getChannel)();
  return reactHandler(channel);
};

var mockServer = exports.mockServer = function mockServer(storyFn, context) {
  return adapterHttpWrapper()(storyFn)(context);
};