"use strict";

/* External dependencies */

const d3 = require('d3');

const max = 1.5, graph = 40, radius = 0.5;

const data = d3.range(150).map(d => ({x: (Math.ceil(Math.random() * 2) % 2 === 0) ?  -Math.random() : Math.random(), y: (Math.ceil(Math.random() * 2) % 2 === 0) ?  -Math.random() : Math.random()}));

let svg = d3.select('body')
	.append('svg')
	.attr({
		/* BOUNDS HERE */
		viewBox: '-50 -50 100 100',
		preserveAspectRatio: 'xMinYMin meet'
	});

let scale = d3.scale.linear()
	.domain([-max,max])
	.range([-graph,graph]);

let axis = d3.svg.axis()
	.scale(scale)
	.tickSize(0)
	.tickPadding(0.2);

svg.append('g')
	.attr('class', 'x')
	.call(axis.orient('top'));

svg.append('g')
	.attr('class', 'y')
	.call(axis.orient('left'));

svg.selectAll('circle')
	.data(data)
	.enter()
	.append('circle')
	.attr({
		cx: d => scale(d.x),
		cy: d => scale(d.y),
		r: radius,
		fill: 'orangered'
	});

d3.select('.y .tick:nth-child(4)').remove()