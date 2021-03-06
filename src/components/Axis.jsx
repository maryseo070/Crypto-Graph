import React from 'react';
import { scaleLinear,scaleTime } from 'd3-scale';
import { axisBottom, axisLeft, axisRight } from 'd3-axis';
import * as d3 from 'd3';

export const AxisX = ({data, width, height}) => {
  // debugger
  function dateString(object) {
    return new Date(parseInt(object.time.toString() + "000"));
  }

  var x = scaleTime()
  .range([0, width]);

  var xAxis = axisBottom(x);
   x.domain(d3.extent(data, function(d) { return dateString(d) }));

  // x.domain(d3.extent(data, function(d) { return d[1]; }));

  d3.select(".x").attr("transform", "translate(0," + height + ")").call(xAxis);

  let g = d3.select(".g");
  g.select("text")
    .attr("class", "axis-title")
    // .text("hello")
    .attr("transform", "translate(500, -50)");

  return(
      <g className="x axis">
      </g>
  );
};


export const AxisY = ({ data, width, height }) => {
  // debugger
  var y = scaleLinear()
    .range([height, 0]);

  var yAxis = axisLeft(y);

  y.domain(d3.extent(data, function(d) { return d.open; }));

  d3.select(".y").call(yAxis)
    .append("text")
    .attr("transform", "rotate(-360)")
    .attr("class", "y-text")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("ETH Price ($)");

    return(
      <g className="y axis"></g>
    );
};

export const AxisYRight = ({ data, width, height }) => {
  // debugger
  var yRight = scaleLinear()
    .range([height, 0]);

  var yAxis = axisRight(yRight);

  yRight.domain(d3.extent(data, function(d) { return d.open; }));

  d3.select(".yRight").call(yAxis)
    .attr("class", "yRight")
    .attr("transform", "translate("  + width + ", 0)")
    .append("text")
    .attr("transform", "rotate(-360)")
    .attr("class", "y2-text")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("BTC Price ($)");

    return(
      <g className="yRight"></g>
    );
};
