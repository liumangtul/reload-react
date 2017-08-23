const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

var config = {
    /*entry:'./react1/index.js',*/
    entry:{
        index:'./react1/index.js',
        vendor:['react','react-dom']
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
            }
        ]
    },
    devtool:'inline-source-map',
    plugins:[
        new CleanWebpackPlugin(['react-dist']),
        new HtmlWebpackPlugin({
            title:'React',
            filename:'react1.html',
            template:'./react-1.html'
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
        filename:'[name].[hash].js',
        path: path.resolve(__dirname,'react-dist')
    },
    devServer: {
        contentBase: './',
        hot:true
    }
};
module.exports=config;
/*
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

var config = {
    /!*entry : './src/index.js',*!/
    entry:{
        app:'./src/index.js',
        print:'./src/print.js',
        vendor:[
            'jquery'
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'Caching',
            filename:'[name].html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
           /!* name: 'common' // Specify the common bundle's name.*!/
           name:'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'runtime'
        })
    ],
    output: {
        filename:'[name].[hash].boudle.js',
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
*/

