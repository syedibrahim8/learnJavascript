// JavaScript Getter and Setter
/*
In JavaScript, there are two kinds of object properties:
1. Data properties
2. Accessor properties
*/

//ex: data property

// let person = {
//     //data property
//     fname : 'Ibarahim';
// }

// Accessor property
/*
Accessor properties are method to get or set the value of an object.
1. get - to define a getter method to get the property value
2. set - to define a setter method to set the property value
*/

// Getter
// getter method are used to access the properties of an object.

// let student = {
//     // data property
//     fname: "Syed",
//     age: 20,
//     get details(){
//         return this.fname;            
//       //return student.fname;           // both works
//     }
// }
// console.log(student); // accessing whole object with getter
// console.log(student.fname)
// console.log(student.details); // accessing getter method

// in above program a getter method details() is created to access the 
// property of an object

// syntax : get variablename (){
//          return this.variable name
//          }

// to access : console.log(objectname.variableofgetmethod)

// Setter
// setter methods are used to change the values of an object

// let person ={
//     fname : "Ibrahim",
//     set changeName(newName){
//         person.fname = newName;
//     }
// }
// console.log(person.fname);

// person.changeName = "Syed Ibrahim Ali"
// console.log(person.fname);

// In javascript, you can also use Object.defineproperty() method
// to add getters and setters.

// let person1 ={
//     fname : "Syed"
// }
// // getting property
// Object.defineProperty(person1, "detail",{
//     get : function(){
//         return this.fname;
//     }
// });
// console.log(person1.detail) //accessing getter method

// // setting property
// Object.defineProperty(person1, "changeName",{
//     set : function(newName){
//         this.fname = newName;
//     }
// })
// console.log(person1.fname);
// person1.changeName = "Syed Ibrahim Ali"
// console.log(person1.fname);



// getter 

// let person = {
//     fname : "Syed",
//     get detail (){
//         return this.fname
//     }
// }
// console.log(person.detail);

//setter
// let person = {
//     fname : "Syed",
//     set changeName(newValue){
//         this.fname=newValue;
//     }
// }
// console.log(person.fname);
// person.changeName = "Afnaan"
// console.log(person.fname)


//Object.defineProperties

// let person = {
//     fname : "Kaif"
// }
 
// Object.defineProperty(person, "chomu",{
//     get : function(){
//         return this.fname
//     }
// })
// console.log(person.chomu)

//setter
let person = {
    fname : "Syed"
}
Object.defineProperty(person, "updateName",{
    set : function(value){
        this.fname = value
    }
})
console.log(person.fname);
person.updateName = "Kaif"
console.log(person.fname);

