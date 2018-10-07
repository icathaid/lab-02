'use strict';

class Vehicle {
  constructor(name, wheels){
    this.name = name;
    this.wheels = wheels;
  }
}
class Car extends Vehicle {
  constructor(props) {
    super(props);
    this.wheels = 4;
  }
  drive() {
    return 'vrooooom!';
  }
  stop() {
    return 'stopping';
  }
}
class Motorcycle extends Vehicle {
  constructor(props){
    super(props);
    this.wheels = 2;
  }
  wheelie(){
    return 'wheeee!';
  }
  drive(){
    return 'brmbrmbrmbrmbrm';
  }
  stop(){
    return 'skrrrrt!';
  }
}

module.exports = {Car, Motorcycle};
