'use strict';

class FlyingVehicle {
  constructor(name, wings) {
    this.name = name;
    this.wings = wings;
  }
  fly(){
    return 'FWOOOOOOOOOSHHH!';
  }
}

class Airplane extends FlyingVehicle {
  constructor(props) {
    super(props);
    this.wings = 'fixed';
  }
  barrelRoll(){
    return 'HOLD MY BEER!';
  }
}

class Helicopter extends FlyingVehicle {
  constructor(props){
    super(props);
    this.wings = 'rotary';
  }
  land(){
    return '30 seconds out!';
  }
}

module.exports = { Airplane, Helicopter };