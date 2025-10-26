// Scoping in JavaScript of a variable determines where it can be accessed within the code.
/*There are 3  types of scoping in JS
 1.Block scope
 2.Functional scope
 3.Global scope
 */

 // Block Scope
 // Block-level variables are accessible only within the block {} 
 // they are defined in, which can be smaller than a function's scope. 
 /*
 {}==> block
 {_______
  _________}
 */

/*
 Block Scope                VAR  LET  CONST
 Inside of Block             Y    Y     Y  
 Outside of Block            Y    N     N
*/

// VAR
{
    var a = 5;
    console.log(a);
}
console.log(a); // ✔️ can access out of the blocks

// LET
{
    let a = 10
    console.log(a);
}
// console.log(a) ❌ can't access out of the blocks

// CONST    
{
    const b = 20   
    console.log(b);
}
// console.log(b) ❌ can't access out of the blocks

// Function Scope
// When variables are declared inside a function.
// they have a local scope and are accessible only within that function.
// These types of variables are called local variables.

/*
Function Scope         VAR   LET   CONST
Inside of Function      Y     Y      Y
Outside of Function     N     N      N
*/

// function decleration 
// VAR
function num1(){
    var a = 10;
    console.log(a);
}
// function calling
num1();
// console.log(a); ❌ can't access out of the function

// LET
function num2(){
    let a = 20;
    console.log(a);
}
num2();
// console.log(a); ❌ can't access out of the function

// CONST
function num3(){
    const a = 30;
    console.log(a);
}
num3();
// console.log(a); ❌ can't access out of the function

/*
Global Scope
In JavaScript, a variable declared outside any function or in the global scope is known as a global variable.
A global variable can be accessed both inside and outside of functions. 
*/

var x = 10;
let y = 20;
const z = 30;

// Inside block
{
    console.log(x);
    console.log(y);
    console.log(z);
}

// Inside function
function hi() {
    console.log(x, y, z);
 }
 hi();

// Anywhere 
 console.log(x, y, z);