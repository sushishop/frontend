const path = require('path');
const webpack = require('webpack')
module.exports = {
    context: path.resolve(__dirname,'src'),
    entry: {
        app:[
            'react-hot-loader/patch',
            './index'
        ]
    },
    output:{
        path: path.resolve(__dirname,'./dist'),
        filename: '[name].js'
    },
    resolve:{
        alias:{
            containers: './containers',
            api:'./api',
            components:'./components'
        }
    },
    module:{
        rules:[
        {
                test: /\.js$/,
             exclude: /node_modules/,
              enforce: 'pre',
              loader: "eslint-loader"
                      
        },
        {
               test: /\.js$/,
            exclude: /node_modules/,
                use: {
                      loader: "babel-loader"
                     }
         },
         {
           test: /\.css$/,
           use: [
             {
               loader: "style-loader"
             },
             {
               loader: "css-loader",
               options: {
                 modules: true,
                 importLoaders: 1,
                 localIdentName: "[name]_[local]_[hash:base64]",
                 sourceMap: true,
                 minimize: true
               }
             },
             {
                 loader: 'postcss-loader',
                 options:{
                     sourceMap: true
                 }
             }
           ]
         }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        contentBase: path.join(__dirname,'public'),
        hot: true,
        historyApiFallback: true,
        proxy:{
            "/api": "http://localhost:3000"
        }
    }
}