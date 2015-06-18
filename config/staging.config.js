var host = require('network-address')();

module.exports = {
    port: process.env.PORT || process.env.NODE_PORT || 8080,
    host: host,
    hotReloadPort: process.env.HOT_RELOAD_PORT || 2993,
    hotReloadUrl: 'http://$(host):$(hotReloadPort)/'
};
