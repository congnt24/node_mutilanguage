let i18n = require('./index');
//config
i18n.locales.vi = require('./vi');
i18n.locales.en = require('./en');
console.log(i18n.get('en', 'hello %ssss'));
console.log(i18n.get('en', 'hello %s', 'cong', 'dz'));
console.log('hello %s'.localize('vi', 'dai1', 'dai2'));