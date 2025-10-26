// In JavaScript, hoisting is a behavior in which a function or a variable can be used before declaration.
/*
There are generally two types of hoistings in JavaScript:
1.Variable Hoisting
2.Function Hoisting
*/

// 1.Variable Hoisting
/*
In JavaScript, the behavior of hoisting varies depending on whether a variable is declared using var, let, or const.
*/

// hoisting with VAR
//When we declare a variable using var, it is hoisted to the top of its current scope.

// use the message variable before declaration
console.log(message);
// variable declaration using var keyword
var message;
// Output: undefined

// Hoisting With 'let' and 'const'
/* 
When we declare a variable using let or const, it is hoisted to the top of its
current scope. However, the variable does not have a default value when it is 
hoisted (unlike when declared using var).
*/
// use the message variable before declaration
console.log(message);

// variable declaration using let keyword
let message;

// output:
// ReferenceError: Cannot access 'message' before initialization

// 2.Function Hoisting
/*
In JavaScript, function hoisting allows us to 
call the function before its declaration.
*/

// function call
greeting(); 

// function declaration
function greeting() {
  console.log("Welcome to Space");
}

// output: Welcome to Space

/*
Notes:
Generally, hoisting is not performed in other programming languages like Python, C, C++, and Java.
Hoisting can cause undesirable outcomes in your program. So, it's best to avoid this practice.
*/

