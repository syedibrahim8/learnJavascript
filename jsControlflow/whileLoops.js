// While loop syntax
// runs while the condition is true
// 1. Initialize
// 2. condition 
// 3. code block
// 4. increment

let i = 0;
while(i<11){
    console.log(i)
    i++
}

/*
Here,
1.The while loop first evaluates the condition inside ( ).
2.If the condition evaluates to true, the code inside { } is executed.
3.Then, the condition is evaluated again.
4.This process continues as long as the condition evaluates to true.
5.If the condition evaluates to false, the loop stops.
*/

// do while loop

let j = 1;
do{
    console.log(j);
    j++;
}while(j<=5);

// ex
let p = 4;
do{
    console.log(p);
    p--;
}while(p > 0);

/*
Here,
1.The do…while loop executes the code inside { }.
2.Then, it evaluates the condition inside ( ).
3.If the condition evaluates to true, the code inside { } is executed again.
4.This process continues as long as the condition evaluates to true.
5.If the condition evaluates to false, the loop terminates.
*/
// a special case loop where it executes the code atleast ones in worst case or
// even if the given condition is wrong