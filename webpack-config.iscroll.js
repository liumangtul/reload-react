const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackDevServer=require('webpack-dev-server');

var config = {
    /*entry:'./react1/index.js',*/
    entry:{
        index:'./iScroll/index.js',
        vendor:['react','react-dom','react-router','react-router-dom','react-redux','redux','redux-thunk','isomorphic-fetch','redux-logger']
    },
    //babel重要的loader在这里
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                //include: APP_PATH,
                query: {
                    //添加两个presents 使用这两种presets处理js或者jsx文件
                    presets: ['es2015', 'react','stage-0']
                }
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'/*'css-loader?modules'*/
                ]
            }
        ]
    },
    devtool:'inline-source-map',
    plugins:[
        new CleanWebpackPlugin(['iScroll/dist']),
        new HtmlWebpackPlugin({
            title:'ASYN',
            filename:'./index.html',
            template:'./iScroll/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'runtime'
        }),
        //压缩
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    output:{
        filename:'[name].js',
        path: path.resolve(__dirname,'iScroll/dist')
    },
    devServer: {
        contentBase: './',
        hot:true
    }
};
module.exports=config;