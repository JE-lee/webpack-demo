import "core-js/modules/es6.promise";

function getName() {
  return new Promise(function (resolve, reject) {
    resolve('lee');
  });
}

export default {
  hello: 'hello world',
  getName: getName
};