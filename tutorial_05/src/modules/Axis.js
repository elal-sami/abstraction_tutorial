"use strict";

/* External dependencies */

const d3 = require('d3');

/* Application dependencies */

const defaults = require('./defaults');
const scale = require('./scale');
const Container = require('./Container');

class Axis extends Container {
	constructor() {
		super()

		/* DEFAULT & EQUAL DISTRIBUTION */

		this.axis = d3.svg.axis()
			.scale(scale)
			.tickSize(0)
			.tickPadding(0.2);

		this.drawAxis();
		this.deletePattern();
	}

	drawAxis() {

		let svg = d3.select('svg');

		svg.append('g')
		.attr('class', 'x')
		.call(this.axis.orient('top'));

		svg.append('g')
			.attr('class', 'y')
			.call(this.axis.orient('left'));
	}

	deletePattern() { d3.select('.y .tick:nth-child(4)').remove(); }
}

module.exports = Axis