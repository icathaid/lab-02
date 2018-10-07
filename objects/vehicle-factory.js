'use strict';

const Vehicle = {
  name: this.name,
  wheels: this.wheels,
  drive(){
    return 'vroooom';
  },
};
console.log(Vehicle);
//  need to use Vehicle somewhere to satisfy linter until I can finish factory functions
const Car = {
  wheels: 4,
  stop(){
    return 'stopping';
  },
  
};

// const MotorCycle = {
//   wheels: 2,
// };

const CarFactory = (name) => {
  let car = Object.assign( Object.create(Car), {name} );
  return car;
};

module.exports = CarFactory;


