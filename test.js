let i18n = require('./index')
//config
i18n.locales.vi = require('./vi')
i18n.locales.en = require('./en')
console.log(i18n.get('en', 'hello %s', 'cong', 'cong'))
console.log('hello %s'.localize('vi'))