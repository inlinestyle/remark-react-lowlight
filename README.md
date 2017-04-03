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
}).processSync(readme).contents}
...
```

## Contributors

* [Ryota](https://github.com/rkaneko) - Fixed `props` for the lowlight component. #1
* [Henrik Lundgren](https://github.com/henriklundgren) - Fixed option property test, allowed skipping inline code tags. #2

## License

MIT.
