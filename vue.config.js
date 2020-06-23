const REPO_NAME = '/dogs-vue' 
const publicPath = process.env.NODE_ENV === 'production' ? REPO_NAME : '/'

module.exports = {
  publicPath,
  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
  }
}
