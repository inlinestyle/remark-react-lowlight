import React from 'react';
import PropTypes from 'prop-types';
import Lowlight from 'react-lowlight';

export default (languageDefinitions, options) => {
  const { autodetect } = Object.assign({
    autodetect: true
  }, options);

  Object.keys(languageDefinitions).forEach((language) => {
    const definition = languageDefinitions[language];

    Lowlight.registerLanguage(language, definition);
  });

  const Code = ({ className = '', children }) => {
    const language = className.split('-')[1] || '';
    const value = children[0] || '';
    const props = { value, inline: true };

    if (Object.keys(languageDefinitions).indexOf(language) > -1) {
      // Include the language only if it was previously registered
      props.language = language;
    }

    return (props.language || autodetect) ? <Lowlight {...props} /> : (
      <code className={className || null}>{children}</code>
    );
  };
  Code.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
  };

  return Code;
};
