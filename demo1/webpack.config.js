const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const devMode = process.env.NODE_ENV !== 'production'
const devMode = false

function resolve(p){
  return path.resolve(__dirname, p)
}
module.exports = {
  mode: 'development',
  entry:{
    index: './index.js',
    detail: './detail.js'
  },
  output: {
    publicPath: './',
    path: resolve('./dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
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
    new htmlWebpackPlugin({ 
      title: 'index',
      chunks: ['index','vendor'] ,
      filename: 'index.html',
      template: './template.html'
    }),
    new htmlWebpackPlugin({
      title: 'detail',
      chunks: ['detail', 'vendor'],
      filename: 'detail.html',
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
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