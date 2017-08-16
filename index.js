let util = require('util');
let i18n = {
    locales: {}
    , getVi: (key, ...args) => util.format(i18n.locales['vi'][key], args)
    , getEn: (key, ...args) => util.format(i18n.locales['en'][key], args)
    , get: (lang, key, ...args) => util.format(i18n.locales[lang][key], args)
};

String.prototype.localize = function (lang, ...args) {
    return i18n.get(lang, this, args)
};
module.exports = i18n;

