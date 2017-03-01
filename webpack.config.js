'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve('./src'),
    entry: {
        app: './app.ts'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: path.resolve('./src'),
        port: 8100,
        hot: true,
        inline: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html'
        })
    ],
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: [/node_modules/, 'dist'],
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'stage-0']
                }
            }, {
                loader: 'ts-loader'
            }]
        }]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            path.resolve('./node_modules')
        ]
    }
};
