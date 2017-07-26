
// webpack.config.js
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + './public/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public/'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
}