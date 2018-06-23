import React from 'react';
import { scaleLinear,scaleTime } from 'd3-scale';
import * as d3 from 'd3';
import { line } from 'd3-shape';
import PropTypes from 'prop-types';
import { select } from 'd3-selection';

export const BtcLine = ({data, height, width}) => {
  var x = scaleTime()
            .range([0, width]);

  var y = scaleLinear()
          .range([height, 0]);

  var l = line()
    .x(function(d) { return x(d.time); })
    .y(function(d) { return y(d.open); });

  if (Array.isArray(data)) {
    data.forEach(function(d) {
      x.domain(d3.extent(data, function(d) { return d.time; }));
      y.domain(d3.extent(data, function(d) { return d.open; }));
    });
  }

  var newline = l(data);

  return(
    <path className="btc-line" d={newline}></path>
  );
};
BtcLine.propType = {
  data: PropTypes.array
};

BtcLine.defaultProps = {
  data: []
};

export default BtcLine;
