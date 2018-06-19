import React, { Component } from 'react';
import { scaleLinear,scaleTime } from 'd3-scale';
import { ticks, axisBottom, axisLeft } from 'd3-axis';
import { select } from 'd3-selection';
import * as d3 from 'd3';
import { line } from 'd3-shape';

export const Line = ({data, height, width}) => {
  var x = scaleTime()
            .range([0, width]);

  var y = scaleLinear()
          .range([height, 0]);

  var l = line()
    .x(function(d) { return x(d[0]); })
    .y(function(d) { return y(d[1]); });

  data.forEach(function(d) {
    x.domain(d3.extent(data, function(d) { return d[0]; }));
    y.domain(d3.extent(data, function(d) { return d[1]; }));
  });

  var newline = l(data);
  console.log(newline);

  return(
    <path className="line" d={newline}></path>
  );
};
