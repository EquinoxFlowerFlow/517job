const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://api.baxiaobu.com/index.php',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ""
      }
    }),
  )
  app.use(
    createProxyMiddleware('/apa', {
      target: 'https://blogs.zdldove.top',
      changeOrigin: true,
      pathRewrite: {
        '^/apa': ""
      }
    }),
  )
}
