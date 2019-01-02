const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')

function resolve(p){
  return path.resolve(__dirname, p)
}
module.exports = {
  mode: 'development',
  entry:{
    index: './index.js',
  },
  output: {
    publicPath: './',
    path: resolve('./dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(png|jpg)/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'images/[name].[ext]'
          }
        }],
        
      }
    ]
  },
  plugins: [
    new extractTextPlugin('style.css'),
    new htmlWebpackPlugin({ 
      title: 'index',
      chunks: ['index','vendor'] ,
      filename: 'index.html',
    })
  ],
  optimization: {
    splitChunks: {
      minSize: 10,
      chunks: 'all',
      name: 'vendor'
    }
  }
}