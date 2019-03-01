const path = require('path')
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
        test: /\.(e|j)s&/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          
        }
      }
    ]
  },
}