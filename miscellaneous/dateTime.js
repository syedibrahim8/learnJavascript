// Javascript Date and Time
/*
In JavaScript, date and time are represented by the Date object. 
The Date object provides the date and time information and also provides various methods.
*/

// four ways to create a date object

// new Date()
// new Date(milliseconds)
// new Date(Date string)
// new Date(year,month,day,hours,minutes,seconds,milliseconds)

// 1.new Date()

let time = new Date()
//console.log(time);

// 2.new Date(milliseconds)

// let time1 = new Date(1000000000455)
//console.log(time1);

// 3.new Date(date string)
// let date = new Date(2020,7,20,5);
// console.log(date);

// getDate()
let date = time.getDate()
console.log(date);

// getFullYear()
let year = time.getFullYear()
console.log(year);

// utcDate()
let utcDate = time.getUTCDate()
console.log(utcDate);

// getDay()
let day = time.getDay()
console.log(day);

// getHours()
let hours = time.getHours()
console.log(hours);

// setDate()
let event = new Date('Feb 19,2020 23:15:30')
event.setDate(15)
console.log(event.getDate());

