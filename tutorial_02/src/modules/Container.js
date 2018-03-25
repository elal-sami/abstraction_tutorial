"use strict";

const d3 = require('d3')
const defaults = require('./defaults');

class Container {
	constructor(properties = {}) {

		if(d3.select('svg').empty()) d3.select('body')
			.append('svg')
			.attr({
				/* BOUNDS HERE */
				viewBox: '-50 -50 100 100',
				preserveAspectRatio: 'xMinYMin meet'
			})
			.style({
				background: '#141414' // (properties.background === undefined) ? defaults.background : properties.background
			});
	}
}

module.exports = Container