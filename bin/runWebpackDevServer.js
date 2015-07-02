var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackDevConfig = require('../webpack.config.dev.js');

new WebpackDevServer(webpack(webpackDevConfig), {
    publicPath: webpackDevConfig.output.publicPath,
    hot: true,
    stats: {colors: true},
    historyApiFallback: true,
    headers: {'Access-Control-Allow-Origin': '*'},
    inline: true
}).listen(webpackDevConfig.hotReloadPort, function (err) {
    if (err) {
        throw err;
    }
    console.log('Webpack dev server listening on %s', webpackDevConfig.hotReloadPort);
});
