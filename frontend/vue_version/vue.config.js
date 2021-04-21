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
    port: 8080,
    // port: 3000,
    proxy: {
      '/api': {
        // target: 'http://[::1]:3001',
        target: 'http://localhost:3001',
        changeOrigin: true
      }
    }
  }
}
