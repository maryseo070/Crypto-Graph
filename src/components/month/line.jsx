import React, { Component } from 'react';
import { scaleLinear,scaleTime } from 'd3-scale';
import { ticks, axisBottom, axisLeft } from 'd3-axis';
import { select } from 'd3-selection';
import * as d3 from 'd3';
import { line, symbolCircle } from 'd3-shape';
import PropTypes from 'prop-types';

export const Line = ({data, height, width}) => {
  var x = scaleTime()
            .range([0, width]);

  var y = scaleLinear()
          .range([height, 0]);

  var l = line()
    .x(function(d) { return x(d.time); })
    .y(function(d) { return y(d.open); });

  function dateString(object) {
    let date = new Date(parseInt(object.time.toString() + "000"));
    return date;
  }

  if (Array.isArray(data)) {
    data.forEach(function(d) {
      x.domain(d3.extent(data, function(d) { return d.time; }));
      y.domain(d3.extent(data, function(d) { return d.open; }));
    });
  }

  var newline = l(data);
  // console.log(newline);

  return(
    <path className="line" d={newline}></path>
  );
};
Line.propType = {
  data: PropTypes.array
};

Line.defaultProps = {
  data: []
};

//
// export const Circle = ({data, height, width}) => {
//   var x = scaleTime()
//             .range([0, width]);
//
//   var y = scaleLinear()
//           .range([height, 0]);
//
//   data.forEach(function(d) {
//
//   })
//
//   d3.select("circle")
//     .data(data)
//     .attr("r", 3)
//     .attr("cx", d3.extent(data, function(d) { return d[0]; }))
//     .attr("cy", d3.extent(data, function(d) { return d[1]; }));
//
//   return(
//     <path className="circle" ></path>
//   )
// };
