# remark-react-lowlight - Syntax highlighting for remark-react through lowlight

**Usage:**

```javascript
...

import remark from 'remark';
import reactRenderer from 'remark-react';
import RemarkLowlight from 'remark-react-lowlight';

import js from 'highlight.js/lib/languages/javascript';

import merge from 'deepmerge';
import sanitizeGhSchema from 'hast-util-sanitize/lib/github.json';

const schema = merge(sanitizeGhSchema, { attributes: { 'code': ['className'] } });

...
{remark().use(reactRenderer, {
  sanitize: schema,
  remarkReactComponents: {
    code: RemarkLowlight({
      js
    })
  }
}).process(readme).contents}
...
```

> You can see *remark-react-lowlight* in use at [react-component-boilerplate](https://github.com/survivejs/react-component-boilerplate).

## License

MIT.
