const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common');


module.exports = Merge(CommonConfig, {
    /**
     * 可怜的跨域问题，在开发模式下，只能配置proxy了
     */
    devServer: {
        proxy: {
            '/categories': {
                target: 'https://api2.qingting.fm/v6/media',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/categories': '/categories'
                }
            },
            '/channelondemands': {
                target: 'https://api2.qingting.fm/v6/media',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/channelondemands': '/channelondemands'
                }
            },
            '/section': {
                target: 'https://api2.qingting.fm/v6/media/recommends/guides',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/section': '/section'
                }
            },
            '/programs': {
                target: 'http://api2.qingting.fm/v6/media',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/programs': '/programs'
                }
            }
        }
    }
});