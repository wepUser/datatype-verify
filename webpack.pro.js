/**
 * Created by admin on 2018-12-16.
 */
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    devtool: 'source-map',
    mode: 'production'
});