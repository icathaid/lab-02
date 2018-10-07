'use strict';

const FlyingVehicle = require('../flyingVehicle-constructor.js');

describe('FlyingVehicles', () => {

  describe('Airplane', () => {

    let airplane = new FlyingVehicle.Airplane('F16');

    it('has fixed wings', () => {
      expect(airplane.wings).toEqual('fixed');
    });

    it('can fly', () => {
      expect(airplane.fly()).toBeTruthy();
    });

    it('can do a barrel roll', () => {
      expect(airplane.barrelRoll()).toBeTruthy();
    });

    it('cannot land', () => {
      expect(airplane.land).toBeUndefined();
      //  wow, that turned out to be a weird test
    });

  });
  describe('Helicopter', () => {
    let chopper = new FlyingVehicle.Helicopter('Blackhawk');
    
    it('has rotary wings', () => {
      expect(chopper.wings).toEqual('rotary');
    });
    it('can fly', () => {
      expect(chopper.fly).toBeTruthy();
    });
    it('can land', () => {
      expect(chopper.land).toBeTruthy();
    });
  });
});