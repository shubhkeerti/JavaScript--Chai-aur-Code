let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());
// console.log(typeof mydate);

// let customDate = new Date(2023, 1, 21)
// console.log(customDate.toDateString());


// let customDateTwo = new Date(2023, 1, 21, 10, 20, 49, 22)
// let customDateTwo = new Date("2009-09-04")
let customDateTwo = new Date("04-09-2009")
// console.log(customDateTwo.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
// we get 5 because the day of that day is at 5th position in week

console.log(newDate.getMonth() + 1);

console.log(newDate.toLocaleString('default', {
    weekday:"narrow",
}))