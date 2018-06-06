const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {         
        'index': ['babel-polyfill', './src/js/index.js'],
        'webapp': './src/js/webAPP.js'
    },    
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: './pages/enroll/enroll.html',
            template: './src/pages/enroll/enroll.html'
        }),
        new HtmlWebpackPlugin({
            filename: './pages/enroll/customerInfo.html',
            template: './src/pages/enroll/customerInfo.html'
        }),
        new HtmlWebpackPlugin({
            filename: './pages/locationCurrency.html',
            template: './src/pages/locationCurrency.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
