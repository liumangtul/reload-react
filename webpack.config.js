const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

var config = {
    /*entry : './src/index.js',*/
    entry:{
        app:'./src/index.js',
        print:'./src/print.js',
        vendors:[
            'jquery'
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            /*title:'Output Management'*/
            title:'Caching'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
           /* name: 'common' // Specify the common bundle's name.*/
           name:'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'runtime'
        })
    ],
    output: {
        filename:'[name].[contenthash].boudle.js',
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