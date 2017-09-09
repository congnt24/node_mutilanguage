USAGE

1. Define language

Each language, you need to create a js file that contain an object.
Sample:

```javascript
let vi = {
    'hello %s': 'xin chao %s'
}
module.exports = vi
```

```javascript
let en = {
    'hello %s': 'Hello %s'
}
module.exports = en
```

2. Configure

```javascript
let i18n = require('vnti18n')
//config
i18n.locales.vi = require('./vi')
i18n.locales.en = require('./en')
```

3. Usage

```javascript
console.log(i18n.get('en', 'hello %s', 'cong'))
//or
console.log('hello %s'.localize('vi', 'cong'))
```


