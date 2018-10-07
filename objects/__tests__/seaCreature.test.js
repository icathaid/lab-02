'use strict';

const SeaCreature = require('../seaCreature-constructor.js');

describe('Sea Creatures', () => {

  describe('Shark', () => {

    let shark = new SeaCreature.Shark('foo');

    it('can SWIM', () => {
      expect(shark.swim()).toBeTruthy();
    });
    it('is fearsome', () => {
      expect(shark.fearsome).toBeTruthy();
    });
    it('can eat', () => {
      expect(shark.eat()).toBeTruthy();
    });

    it('cannot speak', () => {
      expect(shark.speak).toBeUndefined();
    });

  });

  describe('Dolphin', () => {

    let dolphin = new SeaCreature.Dolphin('sparkles');

    it('can swim', () => {
      expect(dolphin.swim()).toBeTruthy();
    });

    it('can speak', () => {
      expect(dolphin.speak()).toBeTruthy();
    });
    it('is not fearsome', () => {
      expect(dolphin.fearsome).toBeFalsy();
    });

  });

});
