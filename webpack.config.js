const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        open: true,
        hot: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_module/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }  
            }
        }]
    }
};