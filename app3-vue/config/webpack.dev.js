// helloVue/config/webpack.dev.js
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

const DEV_PORT = 3003;

const devConfig = {
    mode: 'development',
    output: {
        publicPath: `http://localhost:${DEV_PORT}/`
    },
    devServer: {
        port: DEV_PORT,
        historyApiFallback: {
            index: '/index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'VueRemote',
            filename: 'moduleEntry.js',
            exposes: {
                './VueApp': './src/bootstrap'
            },
            shared: packageJson.dependencies
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

module.exports = merge(commonConfig, devConfig)
