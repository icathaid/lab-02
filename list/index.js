'use strict';

const List = require('./list-constructor.js');

let stuff = new List();
stuff.push('a');
stuff.push('b');
let last = stuff.pop();
console.log(last);
//  it wasn't using last anywhere and it was upsetting the linter