const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const myConfig = require('./moreConfig');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: myConfig.buildPath('src/app.js'),
    output: {
        filename: 'dist/bundle.js'
            //path: path.join(__dirname, 'dist'),
            //filename: 'devBundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: myConfig.buildPath('src/index.html')
        }),
        new webpack.ProvidePlugin({
            'window.jQuery': 'jQuery',
            'window.$': 'jQuery',
            'jQuery': 'jQuery',
            '$': 'jQuery'
        })
    ],
    module: {
        rules: [{
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: require.resolve('eslint-loader'),
                options: {
                    eslintPath: require.resolve('eslint'),
                    configFile: myConfig.buildPath('config/.eslintrc')
                }
            },
            {
                oneOf: [{
                        test: /\.(jpg|jpeg|png|svg)$/,
                        exclude: /node_modules/,
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 8000,
                            name: '[name]-[hash:6].[ext]'
                        }
                    },
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        loader: require.resolve('babel-loader'),
                        query: {
                            presets: ['env', 'react']
                        }
                    },
                    {
                        test: /\.less$/,
                        exclude: /node_modules/,
                        use: [{
                            loader: require.resolve('style-loader')
                        }, {
                            loader: require.resolve('css-loader')
                        }, {
                            loader: require.resolve('less-loader'),
                            options: {
                                strictMath: true,
                                noIeCompat: true
                            }
                        }]
                    },
                    {
                        exclude: [/\.js$/, /\.html$/, /\.json$/],
                        loader: require.resolve('file-loader'),
                        options: {
                            name: 'media/[name]-[hash:6].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        inline: true,
        port: 4000
    }
}