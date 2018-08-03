'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _addons = require('@storybook/addons');

var _addons2 = _interopRequireDefault(_addons);

var _panel = require('./components/panel');

var _panel2 = _interopRequireDefault(_panel);

var _channel = require('./channel');

var _constant = require('./constant');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_addons2.default.register(_constant.ADDON_ID, function (api) {
  var channel = (0, _channel.getChannel)();
  _addons2.default.addPanel(_constant.PANEL_ID, {
    title: 'MockServer',
    render: function render() {
      return _react2.default.createElement(_panel2.default, { channel: channel, api: api });
    }
  });
});