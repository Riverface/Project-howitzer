const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './src'
    },
    plugins: [
        new UglifyJsPlugin({ sourceMap: true }),
        new UglifyJsPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'ProjectHowitzer',
            template: './src/index.html'
        }),
        new CopyPlugin([
            { from: 'src/IMG', to: 'IMG' },
            { from: 'src/DBs', to: 'DBs' }
        ]),
        new Dotenv()
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/,
                    /spec/
                ],
                loader: "eslint-loader"
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                        publicPath: 'img/'
                    }
                }]
            },
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/,
                    /spec/
                ],
                loader: "eslint-loader"
            },
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/,
                    /spec/
                ],
                loader: "babel-loader",
                options: {
                    presets: ['es2015']
                }
            }
        ]
    }
};