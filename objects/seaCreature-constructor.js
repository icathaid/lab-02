'use strict';

const SeaCreature = function (name, fearsome) {
  this.name = name;
  this.fearsome = fearsome;
};

SeaCreature.prototype.swim = () => {
  return '~~~~~~~~~~~ >o';
};

const Shark = function (name) {
  SeaCreature.call(this, name, true);
};

Shark.prototype = new SeaCreature();
Shark.prototype.eat = () => {
  return 'CHOMP CHOMP CHOMP';
};


const Dolphin = function (name) {
  SeaCreature.call(this, name, false);
};

Dolphin.prototype = new SeaCreature();

Dolphin.prototype.speak = () => {
  return 'chirpity chirp chirp!';
};

module.exports = { Shark, Dolphin };
