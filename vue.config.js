module.exports = {
  devServer: {
      disableHostCheck: false,
      host: "0.0.0.0",
      port: 8080, // 修改端口号
      https: false,
      hotOnly: true,
      proxy: { 
        '/api': {
          target: 'https://c.y.qq.com/v8/fcg-bin',
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': ''
          }
        },
        '/audio': {
          target: 'https://u.y.qq.com/cgi-bin',
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/audio': ''
          }
        }
      }
  }
}