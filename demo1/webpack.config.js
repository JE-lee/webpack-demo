const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSCSS = new ExtractTextPlugin('styles/[name]-one.css')
const extractCSS = new ExtractTextPlugin('styles/[name]-two.css')
const extractCSS2 = new ExtractTextPlugin('styles/[name]-three.css')

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
        test: /\.scss$/,
        use: extractSCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: "style-loader",
          use: "css-loader"
        }),
        include: path.resolve(__dirname, './inner')
      },
      {
        test: /\.css$/,
        use: extractCSS2.extract({
          fallback: "style-loader",
          use: "css-loader"
        }),
        include: path.resolve(__dirname, './external')
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
    extractSCSS,
    extractCSS,
    extractCSS2,
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