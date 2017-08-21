const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

var config = {
    /*entry : './src/index.js',*/
    entry:{
        app:'./src/index.js',
        print:'./src/print.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Output Management'
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        /*filename:'boudle.js',*/
        filename:'[name].boudle.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    },
    devtool:'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot:true
    }
};
module.exports=config;