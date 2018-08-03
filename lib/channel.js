'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChannel = undefined;

var _addons = require('@storybook/addons');

var _addons2 = _interopRequireDefault(_addons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var channel = null;

var getChannel = exports.getChannel = function getChannel() {
  if (!channel) {
    channel = _addons2.default.getChannel();
  }
  return channel;
};