var path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: 'xxxxx.js',
    output: {
        filename: 'xxxx.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss']
    },
    devServer: { inline: true },
    module: {
        rules: [{
            test: /\.js$/,
            loaders: ["babel-loader", "eslint-loader"],
            exclude: /node_modules/
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
    ]
};