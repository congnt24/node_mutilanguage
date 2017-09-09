let i18n = require('./index');
//config
i18n.locales.vi = require('./vi');
i18n.locales.en = require('./en');
console.log(i18n.get('en', 'hello %s', 'cong', 'cong'));
console.log('hello %s'.en('dai1', 'dai2'));
let dailocale = 'vi'
console.log('hello %s'[dailocale]('dai1', 'dai2'));