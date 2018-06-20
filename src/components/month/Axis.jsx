import React, { Component } from 'react';
import { scaleLinear,scaleTime } from 'd3-scale';
import { ticks, axisBottom, axisLeft } from 'd3-axis';
import { select } from 'd3-selection';
import * as d3 from 'd3';


export const AxisX = ({data, width, height}) => {
  // var data = this.props.data;
  let dates = [];
  if (Array.isArray(data)) {
    data.forEach( element => {
      let newDate = new Date(element.time);
      dates.push(newDate.getDate());
    });
  }

  function dateString(object) {
    let date = new Date(parseInt(object.time.toString() + "000"));
    return date;
  }

  var x = scaleTime()
  .range([0, width])
  .domain(d3.extent(data, function(d) { return dateString(d); }));

  var xAxis = axisBottom(x);
  // x.domain(d3.extent(data, function(d) { return d[1]; }));

  d3.select(".x").attr("transform", "translate(0," + height + ")").call(xAxis);

  return(
    <g className="x axis"></g>
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
