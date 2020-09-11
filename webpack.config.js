let folder = __dirname;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    entry: ['./app/index.js'],
    output: {
        path: folder + '/build/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                exclude:/node_modules/,
                use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader']
              }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: folder + '/build/',
        inline: true
    },
    optimization: {
        minimize: true //Update this to true or false
    },
    plugins: [
    new HtmlWebpackPlugin({
        // injects bundle.js to our new index.html
        inject: true,
        // copys the content of the existing index.html to the new /build index.html
        template:  path.resolve('./app/index.html')
    }),
    new MiniCssExtractPlugin({
        filename: 'style.css',
    })
  ]
}