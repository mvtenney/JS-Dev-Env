import './index.css'
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would love to be paid ${courseValue} for taking this awesome course`); //eslint-disable-line no-console
