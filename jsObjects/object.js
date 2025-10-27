// Javascipt object is a variable that can store multiple data in key-value pairs
//Example for object

let prsn = {
    firstname : "David",
    city : 'Hyderabad',
    email : `qwerty@gmail.com`,
    age : 20
}
console.log(prsn);

// the syntax of javascript Objects
/*
let objectName ={
    key1 : value1,
    key2 : value2,
    ------
    keyN : valueN
};

Here,
1.objectName - Name of the object.
2.key1 : value1 - The first key-value pair.
3.key2 : value2 - The second key-value pair.
4.keyN : valueN - The Nth key-value pair.
5.In JavaScript, the key-value pairs of an object 
are referred to as properties.
each key-value pair has a colon ':' between them and is 
separated by a comma ','
*/

// Access object properties
// you can access the value of a property by using its key

// 1.Using Dot Notation
let person2 = {
    firstname : "David",
    city : 'Hyderabad',
    email : `qwerty@gmail.com`,
    age : 20
}
console.log(person2.email); // accessing email value only.

// 2. Using Bracket Notation
let person3 = {
    firstname : `John`,
    city : "Mumbai",
    email : 'asdfgh@gmail.com',
    age : 23
}
console.log(person3["city"]); // accessing city value only

// Object operations

// 1.Modify Object Properties
// assigning a new value to an existing key.

let car ={
    brand1 : 'BMW',
    brand2 : "Audi",
}
car.brand2 = "Lamborghini" // modify
console.log(car);

// 2.Add Object Properties

let student = {
    fname : "smith",
    age : 20,
};
 student.rollNo = 7; // adding property
 console.log(student);

// 3.Delete Object Properties
// using the delete operator.

let world = {
    c1 : "India",
    c2 : "USA",
    c3 : "UAE",
    c4 : "Atlantis"
}
delete world.c4; // deleted property
console.log(world);

// We can also include functions inside an object

let person = {
    fname : "Syed Ibrahim Ali",
    age : 20,
    greet : function(){
        console.log(`Hey everyone Learn Javascript.`);
    }
}
person.greet()
console.log(person);
