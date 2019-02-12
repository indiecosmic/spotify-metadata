'use strict';
module.exports = {
    chainWebpack: config => {
        config
          .plugin('html')
          .tap(args => {
            args[0].template = './app/public/index.html'
            args[0].filename = '../views/index.html'
            args[0].favicon = './app/public/favicon.ico'
            return args
          })
      }
}