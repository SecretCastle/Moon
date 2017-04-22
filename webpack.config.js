var path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './app/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss', '.vue']
    },
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
            }
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            loaders: ["babel-loader", "eslint-loader"],
            exclude: /node_modules/
        }, {
            test: /\.vue$/,
            loader: ['vue-loader']
        }, {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader",
                options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader",
                options: {
                    sourceMap: true,
                    includePaths: ["node_modules"]
                }
            }]
        }, {
            enforce: 'pre',
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'eslint-loader',
                query: {
                    configFile: './.eslintrc'
                },
            }],
        }]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by SecretCastle')
    ],

};