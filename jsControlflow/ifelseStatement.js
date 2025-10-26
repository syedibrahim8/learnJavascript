// if-else statement
/*
if..else is used to run the code conditionally- 
only when a specific expression evaluates to true.
or
In computer programming, the if...else statement is a conditional statement 
that executes a block of code only when a specific condition is met

//There are 3 types of if else statements
1. if statement
2. if...else statement
3. if...else if ..else
*/

let age = 20;
if (age >= 18) {
    console.log("You can vote");
}
else{
console.log("You can't vote");
}

// if .... elseif ... else
// if ===> 1st condition
// else if ===> 2nd to nth condition
// else ===> false condition 

let marks = 84

// I want to make a program
//based on numbers i want to assign grade
// 90-100 ==> A+
// 80-90 ==> A
// 70-80 ==> B+
// 60-70 ==> B

if (marks >= 90){
    console.log("A+");
}
else if (marks <= 90){
    console.log("A");
}
else if (marks <= 80){
    console.log("B+");
}
else if (marks <= 70){
    console.log("B");
}
else if (marks <= 60){
    console.log("c");
}
else{
    console.log("You Failed");
}

// temp

let temp = 45;
if (temp >= 35){
    console.log("its hot");
}
else if (temp >= 25){
    console.log("its nice and normal")
}
else{
    console.log("its cold");
}