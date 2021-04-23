module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    }
  },
  publicPath: '/',
  devServer: {
    port: 6002,
    host: '127.0.0.1',
    proxy: {
      '^/api': {
        target: 'http://127.0.0.1:6001',
        changeOrigin: true
      }
    }
  },
}
