import "core-js/modules/es7.string.pad-start";
import word from './lib';

(function () {
  console.log("say something:  ".concat(word.hello));
  console.log('123'.padStart('2', 3)); //let pro = new Promise((resolve, reject) => resolve())
})();