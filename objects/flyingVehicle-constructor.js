'use strict';

const FlyingVehicle = function (name, wings) {
  this.name = name;
  this.wings = wings;
};

FlyingVehicle.prototype.fly = () => {
  return 'FWOOOOOOOOSH!!!!';
};


// Car Constructor
const Airplane = function (name) {
  FlyingVehicle.call(this, name, 'fixed');
};

Airplane.prototype = new FlyingVehicle();

Airplane.prototype.barrelRoll = () => {
  return 'HOLD MY BEER!!!!';
};

const Helicopter = function (name) {
  FlyingVehicle.call(this, name, 'rotary');
};

Helicopter.prototype = new FlyingVehicle();

Helicopter.prototype.land = () => {
  return '30 seconds out!';
};

module.exports = { Airplane, Helicopter };
