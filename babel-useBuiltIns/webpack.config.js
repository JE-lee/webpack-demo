const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
function resolve(pt){
  return path.resolve(__dirname, pt)
}
module.exports = {
  mode: 'development',
  
  entry: resolve('./src/index.js'),
  output: {
    path: resolve('./dist'),
    filename: 'useButiltIn.js'
  },
  module: {
    rules: [
      {
        test: /\.(e|j)s$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}