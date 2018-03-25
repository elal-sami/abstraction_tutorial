"use strict";

/* External dependencies */

const d3 = require('d3');

/* Applications depndencies */

const Container = require('./modules/Container');
const scale = require('./modules/scale');

const container = new Container();

// check scale functionality

const output = scale(0.75);

console.log(output);