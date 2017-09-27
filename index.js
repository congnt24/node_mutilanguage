var reload = require('./require-reload')(require)
var util = require('util');
var cachePath = {};
var i18n = {
    locales: {}
    , get: (lang, key, ...args) => {
        let tmp = i18n.locales[lang][key];
        if (tmp){
            return util.format(tmp, ...args);
        }
        //Handle error
        i18n.onError(key);
        return util.format(key, ...args);
    }
};

i18n.onError = function (key) {};
i18n.addLanguage = function (lang, path) {
    cachePath[lang] = path;
    i18n.locales[lang] = reload(path);
};

i18n.reloadData = function () {
    let keys = Object.keys(cachePath);
    for(key of keys) {
        i18n.addLanguage(key, cachePath[key]);
    }
};

String.prototype.localize = function (lang, ...args) {
    return i18n.get(lang, this.toString(), ...args)
};

module.exports = i18n;