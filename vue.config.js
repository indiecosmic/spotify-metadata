'use strict';
module.exports = {
    chainWebpack: config => {
        config
          .plugin('html')
          .tap(args => {
            args[0].template = './app/public/index.html'
            args[0].filename = '../views/index.html'
            return args
          })
      }
}