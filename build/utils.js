const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.resolve = (dir) => {
    return path.join(__dirname, '..', dir)
}
exports.assetsPath = function (_path) {
    const assetsSubDirectory = 'static/'

    return path.posix.join(assetsSubDirectory, _path)
}
exports.cssLoaders = function (options) {
    options = options || {}

    const cssLoader = {
        loader: 'css-loader',
        options: {
            minimize: true,
            sourceMap: options.sourceMap
        }
    }

    const postcssLoader = {
        loader: 'postcss-loader',
        options: {
            sourceMap: options.sourceMap
        }
    }

    function generateLoaders(loader, loaderOptions) {
        const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap
                })
            })
        }
        if (options.extract) {
            return ExtractTextPlugin.extract({
                use: loaders,
                fallback: 'vue-style-loader'
            })
        } else {
            return ['vue-style-loader'].concat(loaders)
        }
    }
    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        sass: generateLoaders('sass', {indentedSyntax: true}),
        scss: generateLoaders('sass'),
        stylus: generateLoaders('stylus'),
        styl: generateLoaders('stylus')
    }
}

exports.styleLoaders = function (options) {
    const output = []
    const loaders = exports.cssLoaders(options)

    for (const extension in loaders) {
        const loader = loaders[extension]
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            use: loader
        })
    }
    return output
}
exports.createNotifierCallback = () => {
    const notifier = require('node-notifier')

    return (severity, errors) => {
        if (severity !== 'error') return

        const error = errors[0]
        const filename = error.file && error.file.split('!').pop()

        notifier.notify({
            title: 'Enquiry',
            message: severity + ': ' + error.name,
            subtitle: filename || '',
            icon: path.join(__dirname, 'logo.png')
        })
    }
}
