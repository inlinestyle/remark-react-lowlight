'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLowlight = require('react-lowlight');

var _reactLowlight2 = _interopRequireDefault(_reactLowlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (languageDefinitions) {
  Object.keys(languageDefinitions).forEach(function (language) {
    var definition = languageDefinitions[language];

    _reactLowlight2.default.registerLanguage(language, definition);
  });

  var Code = function Code(_ref) {
    var className = _ref.className;
    var children = _ref.children;
    return _react2.default.createElement(_reactLowlight2.default, { language: className.split('-')[1], value: children });
  };
  Code.propTypes = {
    className: _react2.default.PropTypes.string,
    children: _react2.default.PropTypes.node
  };

  return Code;
};