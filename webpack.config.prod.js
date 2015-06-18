'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/client/app',

    output: {
        path: path.join(__dirname, 'public', 'build'),
        filename: 'app.min.js',
        publicPath: '/'
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ],

    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                optional: ['runtime'],
                externalHelpers: true,
                stage: 0
            }
        }]
    }
};
