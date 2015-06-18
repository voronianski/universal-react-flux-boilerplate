'use strict';

var webpack = require('webpack');
var path = require('path');
var config = require('c0nfig');

var hotReloadUrl = config.hotReloadUrl;
var hotReloadPort = config.hotReloadPort;

module.exports = {
    hotReloadPort: hotReloadPort,

    entry: [
        'webpack-dev-server/client?' + hotReloadUrl,
        'webpack/hot/only-dev-server',
        './src/client/app'
    ],

    output: {
        path: path.join(__dirname, 'public', 'build'),
        filename: 'app.js',
        publicPath: hotReloadUrl
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    resolve: {
        extensions: ['', '.js', '.jsx', 'json']
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel?stage=0&optional=runtime&externalHelpers']
        }]
    }
};
