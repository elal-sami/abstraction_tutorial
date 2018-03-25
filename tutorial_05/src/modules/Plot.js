"use strict";

/* External dependencies */

const d3 = require('d3');

/* Application dependencies */

const defaults = require('./defaults');
const Container = require('./Container');
const scale = require('./scale');

class Plot extends Container {
	constructor(properties,data) {
		super()

		const svg = d3.select('svg');
		const fill = (properties.fill === undefined) ? defaults.fill : properties.fill;
		const radiusFactor = (properties.radiusFactor === undefined) ? 1 : properties.radiusFactor;
		const opacityFactor = (properties.opacityFactor === undefined) ? 1 : properties.opacityFactor;

		svg.selectAll('circle')
			.data(data)
			.enter()
			.append('circle')
			.attr({
				cx: d => scale(d.x),
				cy: d => scale(d.y),
				r: d => radiusFactor - (Math.abs(d.y) + Math.abs(d.x)) / 2,
				fill: defaults.fill,
				opacity: d => opacityFactor - (Math.abs(d.y) + Math.abs(d.x)) / 2
			});
	}
}

module.exports = Plot