const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WebpackOnBuildPlugin = require('on-build-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin');
const path = require('path');

const websiteConfig = require('./config.json')

const prod = process.argv.indexOf('-p') !== -1;

const apiUrlDev = JSON.stringify(websiteConfig.apiDev);
const apiUrlProd = JSON.stringify(websiteConfig.apiProd);

const routerModeDev = JSON.stringify('hash');
const routerModeProd = JSON.stringify('history');

if (process.env.NODE_ENV === 'production') {
    var aliases = {
        vue: 'vue/dist/vue.min.js'
    }
    console.log('production')
} else {
    var aliases = {
        vue: 'vue/dist/vue.js'
    }
    console.log('dev')
}

const config = {
    resolve: {
        modules: [
            'node_modules'
        ],
        alias: aliases,
    },
    entry: ['./main.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader', 'style-loader')
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.(svg|otf|ttf|woff|woff2|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
                API_URL: prod ? apiUrlProd : apiUrlDev,
                ROUTER_MODE: prod ? routerModeProd : routerModeDev,
            }
        }),
        new UglifyJsPlugin({
            test: /\.js($|\?)/i
        }),
        new CleanWebpackPlugin(['build']),
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            title: websiteConfig.pageTitle,
            hash: true,
            template: 'my-index.ejs',
            author: {
                name: websiteConfig.authorName,
                email: websiteConfig.authorEmail
            },
            app: {
              name: websiteConfig.appName
            }
        }),
        new WebpackOnBuildPlugin(function(stats) {
            // console.log(stats);
        }),
        new WebpackShellPlugin({
            onBuildStart:['echo "Webpack Start"'],
            onBuildEnd:['echo "Webpack End"']
        })
    ]
}

module.exports = config
