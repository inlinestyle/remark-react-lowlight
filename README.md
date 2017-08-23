[![build status](https://secure.travis-ci.org/bebraw/remark-react-lowlight.svg)](http://travis-ci.org/bebraw/remark-react-lowlight) [![bitHound Score](https://www.bithound.io/github/bebraw/remark-react-lowlight/badges/score.svg)](https://www.bithound.io/github/bebraw/remark-react-lowlight) [![Dependency Status](https://david-dm.org/bebraw/remark-react-lowlight.svg)](https://david-dm.org/bebraw/remark-react-lowlight)

# `remark-react-lowlight`
## Syntax highlighting for [`remark-react`](https://github.com/mapbox/remark-react) through [`lowlight`](https://github.com/wooorm/lowlight)

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

Notes
- The default santization schema (GitHub's) excludes `className`, but we want those `hljs-*` classes for our highlighting! Hence the custom object passed to `santization`.

## Contributors

* [Ryota](https://github.com/rkaneko) - Fixed `props` for the lowlight component. #1
* [Henrik Lundgren](https://github.com/henriklundgren) - Fixed option property test, allowed skipping inline code tags. #2
* [Shingo Sato](https://github.com/sugarshin) - Patch duplicate pre tag. #4

## License

MIT.
