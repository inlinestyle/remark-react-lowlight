import React from 'react';
import Lowlight from 'react-lowlight';

export default (languageDefinitions) => {
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

    return <Lowlight {...props} /> ;
  };
  Code.propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.node
  };

  return Code;
};
