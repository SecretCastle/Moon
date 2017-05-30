const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./app2/main.js", //看app或app2 ，这里改下就行
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss', '.vue']
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
        }, {
            test: /.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: ['url-loader?limit=50000&name=[path][name].[ext]']
        }]
    },
}