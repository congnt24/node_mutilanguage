USAGE

```javascript
npm install vnti18n
```

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
i18n.locales.vi = require('./data/vi')
i18n.locales.en = require('./data/en')

//If you need you file can reloadable, using addLanguage instead

i18n.addLanguage('en', __dirname+'/data/en');
i18n.addLanguage('vi', __dirname+'/data/vi');
//When you need reload data, just call
i18n.reloadData();

//To handle error when note have key
i18n.onError = function (key) {
    console.log("Cannot find key: "+ key)
}

 ... and more
```

3. Usage

```javascript
console.log(i18n.get('en', 'hello %s', 'cong'))
//or
console.log('hello %s'.localize('vi', 'cong'))
```


