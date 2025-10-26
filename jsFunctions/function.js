// A function is an independent block of code that performs a specific task.
// while a function expression is a way to store functions in variables.

// create a function named hi()
function hi(){
    console.log("Hello World!");
}
hi(); // calling function

/*
Here, 
we have created a simple function named hi() that prints Hello World! on the screen.
Our function contains the following parts:

Function Keyword - The function keyword is used to create the function.
Function Name - The name of the function is hi, followed by parentheses ().
Function Body - The code that is executed when we call the function. 
In our case, it is console.log("Hello World!");
*/

// Note: functions are used for code reusability, readability, 
// and to divide code into small tasks for better code organize.

// passing arguments in function

function greet(name){
    console.log(`hello! ${name}`)
}
greet(`john`);
greet (`david`);

// We can return a value from a JavaScript function using the return statement.

function square(num){
    return num*num;
}
let sq = square(3);
console.log(sq);