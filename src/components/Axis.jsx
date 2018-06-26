import React from 'react';
import { scaleLinear,scaleTime } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';
import * as d3 from 'd3';

export const AxisX = ({data, width, height}) => {
  // var data = this.props.data;


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

  var y = scaleLinear()
    .range([height, 0]);

  var yAxis = axisLeft(y);

  y.domain(d3.extent(data, function(d) { return d.open; }));

  d3.select(".y").call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Price ($)");

    return(
      <g className="y axis"></g>
    );
};
