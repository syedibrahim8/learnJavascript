/* JavaScript ES6 also known as ECMAScript2015 or ECMAScript6 is the 
sixth edition of JavaScipt intoduced in 2015

ECMAScript(European Computer Manufactures Association Script) is the 
standard specification of JavaScript to ensure compatibility 
in all browsers and environments
*/

// JavaScript Declarations
/* 
Previously, JavaScript only allowed variable declerations using the 'var'
ES6 now allow you to declare variables using two more keywords: let & const
*/

// Decleration with let keyword
/* 
The let keyword cretaes block scoped variables, which means they are only 
accessible within a particular block of code.
*/
{
    // block of code

    // declare variable with let
    let fname = "Peter";

    // can be accessed here
    console.log(fname); // Peter
}

// can't be accessed here
//console.log(name);

// However, the above program works without any error if we swap let with var.

// This simply means that we have more control over variables declared with let.

// Declaration With const Keyword
// The const keyword creates constant variables that cannot be
//  changed after declaration. 
// For example,

// declare variable with const
const fruit = "Apple";

console.log(fruit);

// reassign fruit
// this code causes an error
fruit = "Banana";

console.log(fruit);

// JavaScript Template Literals
// The template literal makes it easier to include variables inside a string.
// this was how we concatenated strings and variables before:
const fName = "Jack";
const lName = "Sparrow";

console.log("Hello " + fName + " " + lName);

// Now, you can simply do this:
const firstName = "Jack";
const lastName = "Sparrow";

console.log(`Hello ${firstName} ${lastName}`);

// Output: Hello Jack Sparrow

// Default Parameter Values
// In ES6, you can pass default values for function parameters.

// function to find sum of two numbers
function sum(numA, numB = 5) {

    // default value of numB is 5
    console.log(numA + numB);
};

// pass 10 to numA but
// don't pass value to numB
// numB takes default value 5
sum(10);  // 15

// pass 5 to numA and 15 to numB 
sum(5, 15);  // 20

