// DataTypes in JavaScript

/* There are 2 types of datatypes in Javascript
1.Primitive Data Type
2.Non Primitive Data Type

1.Primitive Data Type : Its a type of data type
  which stores single type of data/value

2.Non Primitive Data Type : Its a type of data type
  which can store multiple data and values

Example for Primitive Data Type
1.string : ex : anything in "", ``, ''
2.number : ex : 1234, 45.67, -34, 0
3.boolean : ex : true, false
4.biginit : ex : 12345678987654n
5.null : ex : it denotes a empty value : let a = null;
6.undefined : ex : let a; if you don't store any value it becomes undefined
*/

// to store a string has 3 ways
let fname = "Syed Ibrahim"
let lname = 'Ali'
let city = `Hyderabad`

/*
Example for Non Primitive Data Type
1.Object
2.Array
*/

//Example for object

let person = {
    firstName : `Syed Ibrahim`,
    age : 20,
    isAlive : true,
    sleeping : null,
    bankBalance : 1234567890987654n
}
console.log(person);

//Example for Array

let personDetails = ["Ibrahim", 10, true,123456789098765n, null];
console.log(personDetails);