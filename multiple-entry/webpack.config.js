const path = require('path')
module.exports = {
  mode: 'development',
  entry: ['./src/index.js', './src/comman.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  }
}