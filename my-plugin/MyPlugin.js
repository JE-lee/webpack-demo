// 用来展示webpack 声明收起的钩子

function MyPlugin(option){
  console.log('new plugin', option)
  this.$options = option
}

MyPlugin.prototype.apply = function(compiler){
  // 
  compiler.plugin('entryOption', (compilation) => {
    console.log('entry resolve')
  })
  // 
  compiler.plugin('afterResolvers', (compilation) => {
    console.log('afterResolvers')
  })
  compiler.plugin('environment', (compilation) => {
    console.log('environment')
  })
  compiler.plugin('afterCompile', (compilation, callback) => {
    console.log('afterCompile')
    console.log('callback',callback)
    // callback()
  })
  compiler.plugin('emit', (compilation, callback) => {
    console.log('emit')
    callback()
  })
}

module.exports = MyPlugin