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

  it('should not fail if the defined language is not registered', () => {
    const markdown = '```ruby\na = 1```';
    const wrapper = mount(mdToReact(markdown));
    assert.ok(wrapper.find('code').hasClass('hljs'));
  });

  it('should guess the language if it is not defined', () => {
    const markdown = '```.test { height: 1em; }```';
    const wrapper = mount(mdToReact(markdown));
    assert.ok(wrapper.find('code').hasClass('hljs') && wrapper.find('code').hasClass('css'));
  });

  it('should not guess the language when autodetect is false', () => {
    const markdown = '```.test { height: 1em; }```';
    const wrapper = mount(mdToReact(markdown), { autodetect: false });
    assert.ok(wrapper.find('code').hasClass('hljs') && wrapper.find('code').hasClass('css'));
  });
});
