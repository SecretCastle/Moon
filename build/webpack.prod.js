const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common');

module.exports = Merge(CommonConfig, {
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../dist')
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by SecretCastle'),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            compress: {
                warnings: false
            }
        })
    ]
});