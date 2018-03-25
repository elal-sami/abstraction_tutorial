"use strict";

/* External dependencies */

const d3 = require('d3');

const max = 1.5;
const graph = 45; 
const domain = [-max,max];
const range = [-graph,graph];
const scale = d3.scale.linear()
	.domain(domain)
	.range(range);

module.exports = scale
