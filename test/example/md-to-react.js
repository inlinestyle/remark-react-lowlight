import remark from 'remark';
import reactRenderer from 'remark-react';

import merge from 'deepmerge';
import sanitizeGhSchema from 'hast-util-sanitize/lib/github.json';
import js from 'highlight.js/lib/languages/javascript';

import RemarkLowlight from '../../lib/index.js';

const mdToReact = (markdown) => {
  const schema = merge(sanitizeGhSchema, { attributes: { code: ['className'] } });
  return remark().use(reactRenderer, {
    sanitize: schema,
    remarkComponents: {
      // eslint-disable-next-line new-cap
      code: RemarkLowlight({
        js
      })
    }
  }).process(markdown).contents;
};

export default mdToReact;
