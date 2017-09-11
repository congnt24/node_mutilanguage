let i18n = require('./index');
//config
i18n.locales.vi = require('./vi');
i18n.locales.en = require('./en');



console.log(i18n.get('en', 'hello123', 'adasd', 'asdsadsad'));
console.log(i18n.get('en', 'hello %s', 'cong', 'dz'));
console.log('hello %sssss'.localize('vi', 'dai1', 'dai2'));
console.log('hello %sssss'.vi());