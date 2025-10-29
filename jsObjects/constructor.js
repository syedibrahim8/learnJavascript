// In javaScript, a constructor function is used to create and initialize objects.

// constructor function
// function Person(){
//     this.fname = "Ibrahim",
//     this.age = 20
// }
// // create an object
// let person = new Person();
// // print object attributes
// console.log(person.fname);
// console.log(person.age); 

// // Create multiple Objects With Constructor Function
function Person(){
    this.name = 'Tom',
    this.age = 23,

    this.greet = function (){
        console.log("hello");
    }
}
//create objects
let person1 = new Person();
let person2 = new Person();

//access properties
console.log(person1.name);
console.log(person2.name);

