const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackDevServer=require('webpack-dev-server');

var config = {
    /*entry:'./react1/index.js',*/
    entry:{
        index:'./redux/index.js',
        vendor:['react','react-dom','react-router','react-router-dom']
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
                    presets: ['es2015', 'react']
                }
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    devtool:'inline-source-map',
    plugins:[
        new CleanWebpackPlugin(['redux/dist']),
        new HtmlWebpackPlugin({
            title:'Redux',
            filename:'./index.html',
            template:'./redux/redux.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'runtime'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output:{
        filename:'[name].js',
        path: path.resolve(__dirname,'redux/dist')
    },
    devServer: {
        contentBase: './',
        hot:true
    }
};
module.exports=config;