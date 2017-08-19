'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLowlight = require('react-lowlight');

var _reactLowlight2 = _interopRequireDefault(_reactLowlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (languageDefinitions) {
  Object.keys(languageDefinitions).forEach(function (language) {
    var definition = languageDefinitions[language];

    _reactLowlight2.default.registerLanguage(language, definition);
  });

  var Code = function Code(_ref) {
    var _ref$className = _ref.className,
        className = _ref$className === undefined ? '' : _ref$className,
        children = _ref.children;

    var language = className.split('-')[1] || '';
    var value = children[0] || '';
    var props = { value: value, inline: true };

    if (Object.keys(languageDefinitions).indexOf(language) > -1) {
      // Include the language only if it was previously registered
      props.language = language;
    }

    return _react2.default.createElement(_reactLowlight2.default, props);
  };
  Code.propTypes = {
    className: _propTypes2.default.string,
    children: _propTypes2.default.node
  };

  return Code;
};