const path = require('path');

var config = {
    entry : './src/index.js',
    output: {
        filename:'boudle.js',
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
    }
};
module.exports=config;