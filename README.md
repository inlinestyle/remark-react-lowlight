# remark-react-lowlight - Syntax highlighting for remark-react through lowlight

**Usage:**

```javascript
...

import remark from 'remark';
import reactRenderer from 'remark-react';
import RemarkLowlight from 'remark-react-lowlight'

import js from 'highlight.js/lib/languages/javascript';

...
{remark().use(reactRenderer, {
  remarkReactComponents: {
    code: RemarkLowlight({
      js
    })
  }
}).process(readme)}
...
```

> You can see *remark-react-lowlight* in use at [react-component-boilerplate](https://github.com/survivejs/react-component-boilerplate).

## License

MIT.
