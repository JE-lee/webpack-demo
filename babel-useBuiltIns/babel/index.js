import "core-js/modules/es6.promise";
import "core-js/modules/es7.string.pad-start";
import word from './lib';

(function () {
  console.log("say something:  ".concat(word.hello));
  console.log('123'.padStart('2', 3));
  var pro = new Promise(function (resolve, reject) {
    return resolve();
  });
})();