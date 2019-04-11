import './common.scss';
import './inner/common.css';
import './external/external.css';
import { sayHello } from '../lib/hello'
const print = import('./dynamic-import')
console.log('print', print)
console.log(sayHello())
console.log('add new content')
console.log('add new content 2')