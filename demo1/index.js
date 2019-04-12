import './common.scss';
import './inner/common.css';
import './external/external.css';
import { sayHello } from '../lib/hello';

const print = import('./dynamic-import');
print.then(() => console.log('then'));
(function(){
  console.log('process.IS_MANAGER', IS_MANAGER)
})()
console.log(sayHello())
console.log('add new content')
console.log('add new content 2')

