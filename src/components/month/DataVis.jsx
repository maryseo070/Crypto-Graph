import React, { Component } from 'react';
// import { axis } from 'd3-axis';
import './DataVis.css';
import * as d3 from 'd3';
import { scaleLinear,scaleTime } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';
import { line } from 'd3-shape';
import { select } from 'd3-selection';
import * as d3Axis from 'd3-axis';

const size = 500;
const margin = { top: 20, right: 30, bottom: 30, left: 40 };
const width = 960 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const x = scaleTime()
  .domain([new Date(2001, 0, 1)], new Date(2006, 0, 1))
  .range(([0, width]));

const y = scaleLinear()
  .domain([0, 6])
  .range([height, 0]);

const xAxis = axisBottom();

const yAxis = axisLeft()
  .ticks(5)
  .tickPadding(5);

  // .scale(y);

const connectingLine = line();
  // .interpolate("monotone")
  // .x(function(d) { return x(d[0]); })
  // .y(function(d) { return y(d[1]); });





class DataVis extends Component {
  componentDidMount() {
    select("#x-axis")
      .call(
        axisBottom(x)
      );
    select("#y-axis")
      .call(
        axisLeft(y)
      );
    // select("#line")
    //   .call(connectingLine());
  }


  render () {
    return(
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${size} ${size}`}
        tranform={`translate(${margin.left}, ${margin.top})`}>
        <g
          className="x-axis"
          transform={`translate(0, ${height})`}>
        </g>
        <g
          className="y-axis">
        </g>

      </svg>

    );
  }
  // return(
  //   <svg
  //     width={width}
  //     height={height}
  //     viewBox={`0 0 ${size} ${size}`}
  //     tranform={`translate(${margin.left}, ${margin.top})`}>
  //
  //     <g
  //       className="x-axis"
  //       tranform={`translate(0, ${height})`}>
  //       {xAxis(height)}
  //     </g>
  //
  //     <g
  //       className="y-axis"
  //       call={yAxis}>
  //     </g>
  //
  //     <path
  //       className="line"
  //       d={connectingLine}>
  //     </path>
  //
  //     <circle
  //       className="dot"
  //       cx={connectingLine.x()}
  //       cy={connectingLine.y()}
  //       r="3.5"
  //       >
  //
  //     </circle>
  //
  //   </svg>
  // );
};

export default DataVis;
