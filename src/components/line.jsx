import React from 'react';
import { scaleLinear,scaleTime } from 'd3-scale';
import * as d3 from 'd3';
import { line } from 'd3-shape';
import PropTypes from 'prop-types';

export const Line = ({data, btcData = [], height, width}) => {
  var x = scaleTime()
            .range([0, width]);

  var y = scaleLinear()
          .range([height, 0]);

  var l = line()
    .x(function(d) { return x(d.time); })
    .y(function(d) { return y(d.open); });

  if (Array.isArray(data) && Array.isArray(btcData)) {
    // let combined = data.concat(btcData);
    //used combined in y domain to test both data sets
    data.forEach(function(d) {
      x.domain(d3.extent(data, function(d) { return d.time; }));
      y.domain(d3.extent(data, function(d) { return d.open; }));
    });
    
    ///only bitcoin:
    // btcData.forEach(function(d) {
    //   x.domain(d3.extent(data, function(d) { return d.time; }));
    //   y.domain(d3.extent(data, function(d) { return d.open; }));
    // });
  }
  else if (Array.isArray(data)) {
    data.forEach(function(d) {
      x.domain(d3.extent(data, function(d) { return d.time; }));
      y.domain(d3.extent(data, function(d) { return d.open; }));
    });
  }

  var newline = l(data);

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
