require("core-js/stable");
require("regenerator-runtime/runtime");
const path = require('path');
const Dotenv = require("dotenv-webpack");
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const isDev = (process.env.NODE_ENV === 'development');
const entry = ['core-js', 'regenerator-runtime', './src/index.js'];

if (isDev) {
    const clientConfig = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true';
    entry.push(clientConfig);
}

module.exports = {
    devtool: 'source-map',
    entry,
    mode: process.env.NODE_ENV,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.mjs', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'resolve-url-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { url: true }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    },
    plugins: [
        isDev ? new Webpack.HotModuleReplacementPlugin() : () => { },
        isDev ? () => { } : new CompressionWebpackPlugin({
            test: /\.js$|\.css$/,
            filename: '[path][base].gz'
        }),
        new Dotenv(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: process.env.PORT
    }
};