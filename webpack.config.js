const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: 'app.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader',
        }],
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
    ],
    devServer: {
        // hot: true, // 告诉 dev-server 我们在使用 HMR
        contentBase: path.resolve(__dirname, 'node_modules'),
        // inline: true,
        historyApiFallback: true,
        // stats: 'normal',
        // publicPath: publicPathStr,
        // host: '0.0.0.0',
        // port: 8000,
    },
};