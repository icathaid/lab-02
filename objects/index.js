'use strict';


const Vehicle = require('./vehicle-factory.js');
// const Vehicle = require('./class.js');
// const Vehicle = require('./factory.js');

// Implement a car and motorcycle
// const mazda = new Vehicle.Car('Mazda 3');
// console.log(mazda.name, mazda.wheels, mazda.drive(), mazda.stop());

// const harley = new Vehicle.Motorcycle('Harley');
// console.log(harley.name, harley.wheelie(), harley.stop());


const testeroo = new Vehicle('skateboard');
console.log(testeroo.name, testeroo.wheels);