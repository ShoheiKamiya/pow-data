module.exports = {
  devServer: {
    port: 8081
  },
  pages: {
    index: {
      entry: 'src/main.ts',
      filename: 'index.html',
      title: 'POW DATA',
    }
  },
  chainWebpack: config => {
    config.module
      .rule("eslint")
      .use("eslint-loader")
      .options({ fix: true });
  }
}
