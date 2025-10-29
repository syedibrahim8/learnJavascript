// Make sure you are familiar with javascript functions and objects.

// Javascript Method
// A JavaScript method is a function defined within an object.

// let dog = {
//     fname : "Tommy",
//     bark : function(){   // bark method 
//         console.log('woof!');
//     }
// }
// dog.bark();

// the dog object has two keys: name and bark.
// since the bark key holds the function we refer to it as method.

// The syntax to access an object method is 
// objetName.methodKey()

// This keyword in javascipt
// We use this keyword in an object method 
// to access a property of the same object. 

// let person = {
//     fname : "Syed Ibrahim",
//     age : 20,
//     city : 'Hyderabad',
//     introduce:function(){
//         console.log(`My name is ${this.fname} \nIam ${this.age} years old \nI live in ${this.city}`);
//     }
// }
// person.introduce();

// we created the person object with two properties(name & age) 
// and a method introduce().

// Inside the introduce() method, we used this.name and this.age
// to refer to the name and age keys of the person object.

// Adding methods
/* You can add more methods to a Javascript object even after
we've defined it */ 

// let student ={
//     fname : "Ibrahim",
// }
// student.greet = function(){
//     console.log("Hello");
// }
// student.greet();

/* Initially student didn't hav any method.So, we used the dot notation
to add a new method to the object */
/* JavaScript Built-In Methods

| Method         | Object   |                       Description                        |
|----------------|----------|----------------------------------------------------------|
| console.log()  | Console  | Displays messages or variables in the browser’s console. |
| prompt()       | Window   |  Displays a dialog box that prompts the user for input.  |
| concat()       | String   |     Concatenates the arguments to the calling string.    |
| toFixed()      | Number   |    Rounds off a number into a fixed number of digits.    |
| sort()         | Array    |    Sorts the elements of an array in specific order.     |
| random()       | Math     |  Returns a pseudo-random float number between 0 and 1.   |
*/


//----------------------------------------------------------------------------

let person = {
    fname : "afnaan",
    driving : function(){
        console.log(`Iam ${this.fname} \nIam in ${this.class} \nMy age is ${this.age}`);
    },
    class : 'btech',
    addr : "Hyderabad",
    age : 20
}
console.log(person);
person.driving()
// objectname.functonname()