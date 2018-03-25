"use strict";

/* External dependencies */

const d3 = require('d3');

/* Applications depndencies */

const Container = require('./modules/Container');
const Axis = require('./modules/Axis');
const Plot = require('./modules/Plot');
const scale = require('./modules/scale');
const defaults = require('./modules/defaults');

const max = 1.5, graph = 40, radius = 0.5;

const data = d3.range(150).map(d => ({x: (Math.ceil(Math.random() * 2) % 2 === 0) ?  -Math.random() : Math.random(), y: (Math.ceil(Math.random() * 2) % 2 === 0) ?  -Math.random() : Math.random()}));

const plot = new Plot(defaults,data);
const axis = new Axis();