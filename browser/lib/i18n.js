const path = require('path')
const { remote } = require('electron')
const { app } = remote

// load package for localization
const i18n = new (require('i18n-2'))({
  // setup some locales - other locales default to the first locale
  locales: ['en', 'sq', 'zh-CN', 'zh-TW', 'da', 'fr', 'de', 'hu', 'ja', 'ko', 'no', 'pl', 'pt', 'es-ES'],
  extension: '.json',
  directory: process.env.NODE_ENV === 'production'
    ? path.join(app.getAppPath(), './locales')
    : path.resolve('./locales'),
  devMode: false
})

export default i18n
