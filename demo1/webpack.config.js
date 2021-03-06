const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

const devMode = false

function resolve(p){
  return path.resolve(__dirname, p)
}
module.exports = {
  mode: 'production',
  entry:{
    index: resolve('./index.js'),
    detail: resolve('./detail.js')
  },
  output: {
    publicPath: './',
    path: resolve('./dist'),
    filename: '[name].js'
  },
  devServer: {
    hot: true,
    publicPath: '/asserts/'
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
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      IS_MANAGER: JSON.stringify({ name: 'leeeeee'})
    }),
    new OptimizeCSSAssetsPlugin({}),
    new htmlWebpackPlugin({ 
      title: 'index',
      chunks: ['index'] ,
      filename: 'index.html',
      template: resolve('./template.html')
    }),
    new htmlWebpackPlugin({
      title: 'detail',
      chunks: ['detail'],
      filename: 'detail.html',
      template: resolve('./template.html')
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  optimization: {
    splitChunks: {
      minSize: 1024,
      chunks: 'all',
      name: true,
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true 
        }
      }
    }
  }
}