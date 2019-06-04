const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/api/upload/', 
      { 
        target: 'https://datachecker.staging.lizard.net/',
        "changeOrigin": true,
        "ssl": false,
        "secure": false,
        // "headers": {
        //   "username": "",
        //   "password": ""
        // }
      }
    )
  )
  app.use(
    proxy('/accounts/login/', 
      { 
        target: 'https://datachecker.staging.lizard.net/',
        "changeOrigin": true,
        "ssl": false,
        "secure": false,
        // "headers": {
        //   "username": "",
        //   "password": ""
        // }
      }
    )
  )
}