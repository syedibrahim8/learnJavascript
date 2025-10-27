/* Recursion is a programming technique where a function 
 calls itself repeatedly to solve a problem.
 */

// Program to countdown till 1
// recursive function
function counter(count){
    console.log(count);
    //condition for stopping
    if(count > 1){
        count = count - 1;
        //call counter with new value
        counter(count);
    }else{
        //terminate execution
        return;
    };
};

// access function
counter(5);

/*
we have a function counter() that accepts the argument count, 
which is the starting point for our countdown till 1.

The counter() function first displays count then,
checks if the value of count is greater than 1 with count > 1.

If count > 1 evaluates to true, the program decreases the value of count 
and calls counter() with the new value of count(recursion).

Otherwise, if count > 1 evaluates to false, the program 
executes the return statement, stopping the recursion.

Here,
The counter() function is a recursive function, a function that calls itself recursively.
The count > 1 condition is called a base case, a condition that specifies when the recursion must stop.

Note: Without base cases, a recursive function won't know when to stop, resulting in an infinite recursion (error).
*/

// example find factorial
function factorial(num){
    if (num > 1) {
        return num * factorial(num -1);
    }
    else{
        return 1;
    }
}
let x = 7;
let y = factorial(x);
console.log(`the factorial of ${x} is ${y}`);