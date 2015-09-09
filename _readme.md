Usage
---

```js
var byteCode = require('bytecode')

byteCode.decode('中文')
// => [228, 184, 173, 230, 150, 135]

byteCode.encode([97, 98, 99])
// => 'abc'
```
