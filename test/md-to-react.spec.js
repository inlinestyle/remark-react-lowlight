import React from 'react'; // eslint-disable-line no-unused-vars
import { mount } from 'enzyme';
import assert from 'assert';

import mdToReact from './example/md-to-react.js';

describe('mdToReact', () => {

  it('render code block element using highlight.js', () => {
    const codeBlockText = 'function blah(arg1) {\n  console.log(arg1);\n}\nblah(\'blah\');\n';
    const inputMarkdown = `
\`\`\`js
${codeBlockText}
\`\`\`
`;

    const actual = mdToReact(inputMarkdown);
    const wrapper = mount(actual);
    assert(wrapper.type, 'div');
    assert(wrapper.text(), codeBlockText);
    const preWrapper = wrapper.find('pre');
    assert(
      preWrapper.contains(<pre><code className="language-js">{codeBlockText}</code></pre>)
      , true
    );
  });
});
