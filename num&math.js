const score = 400;
console.log(score);

const bal = new Number(100000000);
console.log(bal);

console.log(bal.toString());
console.log(bal.toString().length);

console.log(bal.toFixed(2)); //to fix the decimal values

console.log(bal.toLocaleString("en-US"));

console.log(bal.toLocaleString("en-IN"));

const bale = 23456.99999999;
console.log(bale.toPrecision(5)); //to get roundoff

//-------------------MATH---------------------------//

console.log(Math.abs(-3)); // absolute so i can coinvert - to +

console.log(Math.round(2.22)); //for round off the decimals

console.log(Math.ceil(6.77));

console.log(Math.floor(6.22));

console.log(Math.sqrt(4));

//----------math random------//

console.log(Math.random());

console.log(Math.random() * 10 + 1);

a = Math.floor(Math.random() * 10 + 1);
b = Math.floor(Math.random() * 10 + 1);
console.log(a + b);

//----imp in js ---//
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
