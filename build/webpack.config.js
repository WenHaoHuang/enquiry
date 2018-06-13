const utils = require('./utils')

module.exports = {
    dev: {
        NODE_ENV: '"development"',
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/askprice': {
                changeOrigin: true,
                target: "http://139.224.36.14:3380",
                secure: false
            },
            '/auth': {
                changeOrigin: true,
                target: "http://139.224.36.14:3380",
                secure: false
            }
        },
        host: 'localhost',
        port: 8080,
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false,
        devtool: 'cheap-module-eval-source-map',
        cacheBusting: true,
        cssSourceMap: true
    },
    build: {
        NODE_ENV: '"production"',
        index: utils.resolve('./../dist/index.html'),
        assetsRoot: utils.resolve('./../dist'),
        assetsSubDirectory: utils.resolve(`./../dist/static`),
        assetsPublicPath: '/',
        productionSourceMap: false,
        devtool: '#source-map',
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: false
    }
}

