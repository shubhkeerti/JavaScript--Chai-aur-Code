const a = 100;
// console.log(a);

const b = new Number(100);
// console.log(b);


// console.log(b.toString());
// console.log(b.toFixed(2));

const otherNumbs = 15463.50
// console.log(otherNumbs.toPrecision(5));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));



// ++++++++++++++++++++ Maths ++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));
// console.log(Math.pow(2,3));
// console.log(Math.sqrt(2));


// Very Important Topic and it's code 
console.log(Math.random());
console.log((Math.random() * 10 + 1));
console.log(Math.floor(Math.random() * 10) + 1);

const min = 100;
const max = 1000;

// Formula --
console.log(Math.floor(Math.random() * (max - min + 1)) + min);