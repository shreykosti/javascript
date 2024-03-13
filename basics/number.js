const score = 400;
console.log(score);
//defining number
const balance = new Number(100);
console.log(balance);
//methods//
//1
console.log(typeof balance.toString());
//2
console.log(balance.toFixed(3));
//3
const otherNumber = 123.4567;
console.log(otherNumber.toPrecision(3));
//4
const hundred = 100000000;
console.log(hundred.toLocaleString())
console.log(hundred.toLocaleString('en-IN'))
//5
console.log(Number.MAX_VALUE);
//++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.random());//giver a random value between 0 AND 1

//generating random number between a range

const min = 10;
const max = 200;

console.log(Math.floor(Math.random() * (max - min + 1) + min));