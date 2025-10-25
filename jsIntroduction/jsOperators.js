// Operators in Java script
// Types of Operators

/*
 1.Arithmetic Operators
 2.Assignment Operators
 3.Comparison Operators
 4.Logical Operators
 5.Bitwise Operators
 6.Ternary Operators
 7.Typeof operators
 8.String operators
 9.Nullish Coalescing & Optional Chaining
 10.Spread & Rest Operators 
*/

// 2 + 3 = 5;
// + is an operator
// 2 and 3 are operands

// 1.Arithmetic Operator
/*
 |Operator |    Description     |Example |Result |
 |---------|--------------------|--------|-------|
 |    +    |     Addition       |  5+2   |   7   |
 |    -    |    Substraction    |  5-2   |   3   |
 |    *    |   Multiplication   |  5*2   |   10  |
 |    /    |      Division      |  5/2   |   2.5 |
 |    %    | Modulus (Remainder)|  5%2   |   1   |
 |    **   |    Exponential     |  2**3  |   8   |
 */

 // Example 1

 let x = 5;
 let y = 6;
 console.log(x+y);
 console.log(x-y);
 console.log(x*y);
 console.log(x/y);
 console.log(x%y);
 console.log(x**y);

// Assignmet Operator
/*
 | Operator | Example  |   Same as   |
 | -------- | -------  | ----------- |
 |    =     |  x = 5   |  x = 5      |
 |    +=    |  x += 5  |  x = x + 5  |
 |    -=    |  x -= 5  |  x = x - 5  |
 |    *=    |  x *= 5  |  x = x * 5  |
 |    /=    |  x /= 5  |  x = x / 5  |
 |    **=   |  x **= 5 |  x = x ** 5 |
*/

// Example 1
 let box = 5;
 console.log(box);
 console.log(box+=5); 
 console.log(box-=2);
 console.log(box*=3);
 console.log(box/=2);
 console.log(box**=2);

// Comparison Operator
// Comparison Operators compare two values 
// and returns a boolean value either true or false
/*
| Operator |      Description      |  Example  |
|----------|-----------------------|-----------|
|    ==    |       Equals to       |  x == y   |
|----------|-----------------------|-----------|
|    !=    |     NOt equals to     |  x != y   |
|----------|-----------------------|-----------|
|          |   Returns true only   |           |
|    ===   |   if value and data   |  x === y  |
|          |     type are same     |           |
|----------|-----------------------|-----------|
|          |   Returns true only   |           |
|    !==   |   if value and data   |  x !== y  |
|          |    type aren't same   |           |
|----------|-----------------------|-----------|
|    <     |       Less than       |   x < y   |
|----------|-----------------------|-----------|
|    <=    |   Less than equal to  |  x <= y   |
|----------|-----------------------|-----------|
|    >     |     Greater than      |   x > y   |
|----------|-----------------------|-----------|
|    >=    | Greater than equal to |  x >= y   |
*/

let a = 5;       // number
let b = "5";     // string
let c = 3;       // number
let d = 2;       // number
let e = 5;       // number
  
console.log(a==e);
console.log(a==b);
console.log(a===b);
console.log(a!=d);
console.log(a!==b);
console.log(a<c);
console.log(a<=c);
console.log(a>c);
console.log(a>=c);

// Bitwise Operator
// Bitwise Operator treat its opereands as a set of 32 bit binary digits (zero's and one's)
// and perform action. Therefore, the result is shown as a decimal.
/*
| Operator |     Name    |   Example   |
|----------|-------------|-------------|
|    &     | Bitwise AND |    x & y    |
|    |     | Bitwise OR  |    x | y    |
|    ^     | Bitwise XOR |    x ^ y    |
|    ~     | Bitwise NOT |    x ~ y    |
*/
/* Note : JavaScript minimum and maximum number ranges from 
        ==> -(2^53-1) to (2^53-1)
        ==> -9,007,199,254,740,991
    but, Bitiwse only works till
    ==> -(2^31) to (2^31-1)
    ==> -2147483648 to 21474883647     
*/


// Example
let p = 10;
let q = 2;
console.log(p & q);           // AND operator
console.log(p | q);           // OR operator
console.log(p ^ q);           // XOR  operator
console.log(~p);              // (~x) = -(x+1) NOT operator
