const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WebpackOnBuildPlugin = require('on-build-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const websiteConfig = require('./config.json')

const prod = process.argv.indexOf('-p') !== -1;

const apiUrlDev = JSON.stringify(websiteConfig.apiDev);
const apiUrlProd = JSON.stringify(websiteConfig.apiProd);
const redirectUrlDev = JSON.stringify(websiteConfig.redirectDev);
const redirectUrlProd = JSON.stringify(websiteConfig.redirectProd);
const client = JSON.stringify(websiteConfig.client);
const clientId = JSON.stringify(websiteConfig.clientId);
const clientSecret = JSON.stringify(websiteConfig.clientSecret);
const routerModeDev = JSON.stringify('hash');
const routerModeProd = JSON.stringify('history');

if (process.env.NODE_ENV === 'production') {
    var aliases = {
        vue: 'vue/dist/vue.min.js'
    }

    var onBuildReady = ['./sh_scripts/deploy.sh'];
    console.log('production')
} else {
    var aliases = {
        vue: 'vue/dist/vue.js'
    }
    var onBuildReady = ['echo "dev build is ready"'];
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
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[name].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
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
                REDIRECT_URL: prod ? redirectUrlProd : redirectUrlDev,
                CLIENT: client,
                CLIENT_ID: clientId,
                CLIENT_SECRET: clientSecret
            }
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
            onBuildEnd: onBuildReady
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new CopyWebpackPlugin([
            {from:'static',to:'static'}
        ]),
    ]
}

module.exports = config
