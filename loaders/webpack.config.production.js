const webpack = require('webpack');
const path = require('path');
const pak = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry:{
    app:path.resolve(__dirname,'app/index.jsx'),
    vendor:Object.keys(pak.dependencies)
  },
  output:{
    filename:'js/[name][hash:8].js',
    path:__dirname+'/build',
    // publicPath:'http://localhost:8080/build'
    publicPath:'./'
  },
  devtool:'inline-source-map',
  module:{
    loaders:[
      {
        test:/\.(js|jsx)?$/,
        exclude:/node_modules/,
        loader:'babel-loader',
        query:{
          presets:['es2015','react']
        }
      },{
        test:/\.less$/,
        exclude:/node_modules/,
        loader:ExtractTextWebpackPlugin.extract({
          fallback:'style-loader',
          use:'css-loader!postcss-loader!less-loader'
        })
      },{
        test:/\.css$/,
        exclude:/node_modules/,
        loader:ExtractTextWebpackPlugin.extract({
          fallback:'style-loader',
          use:'css-loader!postcss-loader'//?name=../images/[hash:8].[name].[ext]'
        })
      },{
        test:/\.(png|gif|jpg|jpeg|bmp)$/,
        exclude:/node_modules/,
        loader:'url-loader',//?limit=5000&name=./images/[name].[hash:8].[ext]
        query:{
          limit:5000,
          name:'images/[name].[hash:8].[ext]',
          //outputPath:'../'
          //useRelativePath:true
        }
      }//,
      //  {
      //    test:/\.(png|gif|jpg|jpeg|bmp)$/,
      //    loader: "file-loader",//?limit=5000&name=images/[hash:8].[name].[ext]
      //    query:{
      //      limit:5000,
      //      name:'css/[name].[ext]'
      //    }
      //  }
       /*,{
　　　　　　test: /\.html$/,
　　　　　　loader: 'html-withimg-loader'
　　　　}*/
    ]
  },
  plugins:[
    new cleanWebpackPlugin(['build/']),
    new HtmlWebpackPlugin({
      template:__dirname+'/app/index.tmpl.html'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        // 去除警告代码
        warnings:false
      }
    }),
    new ExtractTextWebpackPlugin('./[name].[hash:8].css'),
    // new HtmlWebpackPlugin({
    //   template: 'html-withimg-loader!'+path.resolve(__dirname+'/build/', 'index.html')//,
    //   // filename: 'index.html'
    // })
  ]
};

module.exports = config;
