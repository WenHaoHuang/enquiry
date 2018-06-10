const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const vueLoaderConfig = require('./vue-loader.conf')
const config = require('./webpack.config')

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/main.js'
    },
    output: {
        path: utils.resolve('../dist'),
        filename: 'static/js/[name].js?v=[hash:4]',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': utils.resolve('src'),
            'assets': utils.resolve(`src/assets`),
            'components': utils.resolve('src/components'),
            'mixins': utils.resolve('src/mixins'),
        }
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: utils.resolve(`./src/static`),
                to: process.env.NODE_ENV === 'production'
                    ? config.build.assetsSubDirectory
                    : config.dev.assetsSubDirectory,
                ignore: ['.*']
            }
        ]),
        new HtmlWebpackPlugin({
            template: `./src/template.html`,
            filename: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: 'dependency'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks (module) {
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'app',
            async: 'vendor-async',
            children: true,
            minChunks: 3
        }),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [utils.resolve('src')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10240,
                    name: utils.assetsPath('img/[name].[ext]?v=[hash:4]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10240,
                    name: utils.assetsPath('media/[name].[ext]?v=[hash:4]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10240,
                    name: utils.assetsPath('fonts/[name].[ext]?v=[hash:4]')
                }
            },
        ]
    },
    node: {
        setImmediate: false,
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
}
