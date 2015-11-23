/* eslint-env node */
/* global config:true */

require('babel/register');
var path = require('path');

var firefly_root = path.resolve(__dirname, '../../../firefly');

config = {
    name    : 'irsaviewer',
    src     : __dirname,
    entry   : {
        fflib: path.resolve(firefly_root, 'src/firefly/js/fireflyJSLib.js'),
    },
    firefly_dir : path.resolve(firefly_root, 'src/firefly')
};

module.exports = require(firefly_root + '/buildScript/webpack.config.js');
