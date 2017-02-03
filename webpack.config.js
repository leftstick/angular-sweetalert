const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

module.exports = function(env = {}) {
    const isDemo = !!env.isDemo;
    return {
        entry: {
            index: resolve(__dirname, 'demo', 'js', 'index.js'),
            vendor: resolve(__dirname, 'demo', 'js', 'fw', 'ext', 'main.js'),
            serviceworker: resolve(__dirname, 'demo', 'js', 'fw', 'ext', 'serviceworker.js')
        },
        output: {
            path: resolve(__dirname, 'build'),
            filename: (isDemo ? '[hash].' : '') + '[name].bundle.js',
            chunkFilename: (isDemo ? '[hash].' : '') + '[id].bundle.js',
            publicPath: isDemo ? '/angular-sweetalert/' : '/'
        },
        devServer: {
            contentBase: resolve(__dirname, 'build')
        },
        devtool: isDemo ? '' : '#source-map',
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'postcss-loader'
                        }
                    ]
                },
                {
                    test: /\.(js|co)$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    ['es2015', {
                                        modules: false
                                    }]
                                ],
                                plugins: ['transform-object-rest-spread', 'angularjs-annotate']
                            }
                        }],
                    exclude: /(node_modules)/
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|png)\w*/,
                    use: ['file-loader']
                }
            ]
        },
        resolve: {
            modules: [
                resolve(__dirname, 'node_modules'),
                resolve(__dirname, 'demo'),
                resolve(__dirname, 'demo', 'js')
            ],
            extensions: [
                '.js',
                '.co'
            ]
        },
        plugins: (isDemo ? [new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })] : []).concat([
            new webpack.DefinePlugin({
                'process.env': {
                    DEBUG: !isDemo
                }
            }),
            new ServiceWorkerWebpackPlugin({
                entry: resolve(__dirname, 'demo', 'js', 'sw.js'),
                publicPath: isDemo ? '/angular-sweetalert/' : '/'
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                'window.jQuery': 'jquery'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'commons',
                chunks: ['serviceworker', 'vendor', 'index']
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                inject: 'body',
                template: resolve(__dirname, 'demo', 'index.html'),
                favicon: resolve(__dirname, 'demo', 'img', 'favicon.png'),
                hash: false
            })
        ])
    }
};
