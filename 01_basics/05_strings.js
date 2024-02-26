const name = "Shubh";
const age = 22;

// console.log(name + age + " HI");

// In modern days we use strings interpolation 👇👇

console.log(`Hi I'm ${name} and my age is ${age} and I'm from Patna`);

const a = new String("shubh")
// console.log(a[0]);
// console.log(a.__proto__);
// console.log(a.length);
// console.log(a.toUpperCase());
// console.log(a.indexOf('h'));
// console.log(a.charAt(2));


const newA = a.substring(0,3)
// console.log(newA);

const anotherA = a.slice(-5, 4);
// console.log(anotherA);


const anotherTwo = "    hello        Hi    hey   "
console.log(anotherTwo);
console.log(anotherTwo.trim)


const url = "https://shubh.com/shubh%20keerti"
console.log(url.replace('%20', '-'));

console.log(url.includes('ee'));

console.log(anotherTwo.split(' '));