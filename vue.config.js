const publicPath = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_REPO_NAME : '/'

module.exports = {
  publicPath,
  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
  }
}
