// prototypes allow properties and methods to be shared among instances of the object.


// add a property to prototype
// car.prototype.color = "Red";

// // add a method to the prototype
// car.prototype.drive = function(){
//     console.log(`Driving car is printed in ${this.color}`);
// }

// console.log(`The car's color is : ${this.color}`);

// car.prototype.drive();

// example 2

function car(model, year){
    this.model = model
    this.year = year
}

let car1 = new car("mustang", 1966);
let car2 = new car("BMW",2025);

car.prototype.color = "Black";

car.prototype.drive = function(){
    console.log(`Iam driving ${this.model} of year ${this.year} painted in ${this.color}`);
}
console.log(`iam driving ${car1.model} of year ${car1.year} painted in ${car1.color}`)
console.log(`iam driving ${car2.model} of year ${car2.year}`)

car1.drive()
car2.drive()

// function car(){
//     this.color = "Yellow"
// }

// car.prototype.color = "black"
// car.prototype.wheel = 4

// let car1 = new car
// let car2 = new car
// console.log(`The car color is ${car1.color}`);
// console.log(`The car has ${car2.wheel} wheels`);