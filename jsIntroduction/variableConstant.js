// Variables and constant 

/*
there are 3 types of variables in js
1.var
2.let
3.const

variables are containers (storage areas) for
data/text/value
variables basically store ==> number/text and 
other data types
*/

/*In JavaScript, we use the var or let 
keywords to declare variables. For example,
*/

var age;
let name;

/*
Initialize Variables in JavaScript
We use the assignment operator "=" to 
assign a value to a variable.
*/

//  to declare variable num
let num;
// to assign 5 to num
num = 5;

//You can also initialize variables during its declaration.

let num1 = 5; // declare variable num1 and assign 5 to it

//In JavaScript, it's possible to declare multiple variables in a single statement.

// declare variables num1, num2, and num3
// assign values 5, 6, and 7 respectively
let num2 = 5, num3 = 6, num4 = 7;

//Change the Value of Variables
// Redeclare vs Reassign

// Redeclare means using var let const 2 times
// While updating 
// Redeclare works in only var

// Reassign means without using var let
// While updating
// Reassign works in var let

// Redeclare 
 var age = 20;
 var age = 30;            // redeclared & updated var 
 console.log(age);

// Reassign
 let a = 10;
 a = 20;                  // reassigned let but can't redeclare let
 console.log(a);
 
// Const cannot be redeclared or reassigned
 const aadharcard = "1234567890";
 console.log(aadharcard);
 /*
 aadharcard = "0987654321"; // can't redeclare & can't reassign
 console.log(aadharcard); ❌ doesn't execute 
 */ 

/*JavaScript Constants
A constant is a type of variable whose value cannot be changed.

In JavaScript, we use the const keyword to create constants. For example
*/

// assign 5 to box 
const box = 5;
// Once a constant is initialized, we cannot change its value.
// assign 10 to box
box = 10;  
console.log(box) // ❌Error! constant cannot be changed

//Note: If you are sure that the value of a variable won't change throughout the program, we recommend you use const.

// Rules for naming Javascript variables
/*
1. Variables name must be start with either a letter, underscore or dollar symbol
*/

let x = "hello";
let _b = "hey";
let $c = "hi";

/*
2. Variable names can't start with numbers
 let 1a = "hello"; ❌ this gives error
3. Javascript is case-sensitive so 'y' & 'Y' are different
*/ 
let y = `bye`;
let Y = 'tata';
console.log(y);
console.log(Y);

/*
4. Keywords can't be used as variable names 
 let new = 5 // ❌ Error
 let let = 10 // ❌ Error
 let var = "20" // ❌ Error
 let for = "30" // ❌ Error
 
5. In Javascript, the variable names are generally written in camelCase if it has multiple words
For Ex:
      firstName, annualSalary 
*/