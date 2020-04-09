const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'dist/html'),
        compress: true,
        port: 9000
    },
    entry: './index.webpack.js',
    output: {
        path: __dirname + '/dist',
        filename: 'js/app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "html/index.html",
            template: path.resolve(__dirname, 'src/html', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'css/styles.css'
        }),
        new VueLoaderPlugin(),
        new CopyWebpackPlugin([
            { from: '**/*', to: 'images', context: 'src/images' }
        ])
    ]
}