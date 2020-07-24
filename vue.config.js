module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/global.scss";@import "~@/assets/scss/variables.scss";`
      }
    }
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = '管理平台'
      return args
    })
  }
}
