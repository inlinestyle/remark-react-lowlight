import React from 'react';
import Lowlight from 'react-lowlight';

export default (languageDefinitions) => {
  Object.keys(languageDefinitions).forEach(language => {
    const definition = languageDefinitions[language];

    Lowlight.registerLanguage(language, definition);
  });

  const Code = ({ className = '', children }) => {
    const language = className.split('-')[1] || '';
    const value = children[0] || '';
    const props = { language, value, inline: true };
    return language ? <Lowlight {...props} /> : <code>{ value }</code>;
  };
  Code.propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.node
  };

  return Code;
};
