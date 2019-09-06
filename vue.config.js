// vue.config.js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/Botaye/':
        '/',

    pluginOptions: {
      i18n: {
        locale: 'am',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: true
      }
    }
}
