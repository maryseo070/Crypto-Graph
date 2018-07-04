import React from 'react';
import { scaleLinear,scaleTime } from 'd3-scale';
import * as d3 from 'd3';
import { line } from 'd3-shape';
import PropTypes from 'prop-types';

export const BtcLine = ({data, height, width}) => {

//new d3 version 4 uses scaleTime instead of scale.time to
//divy up the time data points onto the x-axis along the width of the svg
  var x = scaleTime()
            .range([0, width]);

  var y = scaleLinear()
          .range([height, 0]);

  var l = line()
    .x(function(d) { return x(d.time); })
    .y(function(d) { return y(d.open); });

//giving data to the line (using d.time for the x axis and d.open for the y)
  if (Array.isArray(data)) {
    data.forEach(function(d) {
      x.domain(d3.extent(data, function(d) { return d.time; }));
      y.domain(d3.extent(data, function(d) { return d.open; }));
    });
  }

  var newline = l(data);

//extracts only the necessary svg elements into the return statments and takes
//care of the rest of d3 functions in the main BTCLine function
  return(
    <path className="btc-line" d={newline}></path>
  );
};

//set default propTypes so on initial render when data is not
//yet set, there is no error/we don't have to write a conditional
BtcLine.propType = {
  data: PropTypes.array
};

BtcLine.defaultProps = {
  data: []
};

export default BtcLine;
