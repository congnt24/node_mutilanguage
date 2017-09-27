let i18n = require('./index');
//config
i18n.locales.vi = require('./data/vi');
i18n.locales.en = require('./data/en');


i18n.onError = function (key) {
    console.log("Cannot find key: "+ key)
}

console.log(i18n.get('en', 'hello123', 'adasd', 'asdsadsad'));
console.log(i18n.get('en', 'hello %s', 'cong', 'dz'));
console.log('hello %s'.localize('vi', 'dai1', 'dai2'));

i18n.addLanguage('en', __dirname+'/data/en');
i18n.addLanguage('vi', __dirname+'/data/vi');
var interval = setInterval(function() {
    i18n.reloadData();
}, 1000);
