import React from 'react'; // eslint-disable-line no-unused-vars
import { mount } from 'enzyme';
import assert from 'assert';

import mdToReact from './example/md-to-react';

describe('mdToReact', () => {
  it('render code block element using highlight.js', () => {
    const codeBlockText = 'function blah(arg1) {};';
    const inputMarkdown = `
\`\`\`js
${codeBlockText}
\`\`\`
`;

    const actual = mdToReact(inputMarkdown);
    const wrapper = mount(actual);

    assert.ok(wrapper.find('code').hasClass('hljs'));
  });

  it('should skip elements without defined language', () => {
    const markdown = 'foo `bar` baz';
    const wrapper = mount(mdToReact(markdown));
    assert.ok(wrapper.contains(<code>bar</code>));
  });
});
