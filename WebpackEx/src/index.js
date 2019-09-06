import { square } from './math';

import './style.css';

var element = document.getElementById('result');

element.innerText = 'Square of 100 is: ' + square(100);

console.log(square(100));