const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry:path.resolve(__dirname,'app/index.jsx'),
  output:{
    filename:'bundle.js'
  },
  module:{
    loaders:[
      {
        test:/\.(js|jsx)?$/,
        exclude:/node_modules/,
        loader:'babel-loader',
        query: {
            presets: ['es2015','react']
        }
      },{
        test:/\.less$/,
        exclude:/node_modules/,
        loader:'style-loader!css-loader!less-loader!postcss-loader'
      },{
        test:/\.css$/,
        exclude:/node_modules/,
        loader:'style-loader!css-loader!postcss-loader'
      },{
        test:/\.(png|gif|jpg|jpeg|bmp)$/i,
        loader:'url-loader?limit=5000'
      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
      template:__dirname + '/app/index.tmpl.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer:{
    hot:true,
    inline:true
  }
};
module.exports = config;
