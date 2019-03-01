
function getName(){
  return new Promise((resolve, reject) => {
    resolve('lee')
  })
}
export default {
  hello: 'hello world',
  getName
}