const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './test/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader', 'html-swig-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'test',
            template: './test/index.html',
            filename: 'index.html',
            inject: false
        })
    ],
    devServer:{
        open:true
    }
}