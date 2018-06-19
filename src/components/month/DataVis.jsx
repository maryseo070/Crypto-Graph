import React, { Component } from 'react';
// import { axis } from 'd3-axis';
import './DataVis.css';
import * as d3 from 'd3';
import { scaleLinear,scaleTime } from 'd3-scale';
import { ticks, axisBottom, axisLeft } from 'd3-axis';
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

const xAxis = axisBottom()

const yAxis = axisLeft()
  .ticks(5, "s")
  .tickPadding(5);

  // .scale(y);

const connectingLine = line()
  // .interpolate("monotone")
  .x(function(d) { return x(d[0]); })
  .y(function(d) { return y(d[1]); });

const style = {opacity: 1, stroke: "black"}


class DataVis extends Component {
  constructor(props){
    super(props);
    this.renderTicks = this.renderTicks.bind(this);
  }
  componentDidMount() {
    select("#x-axis")
      .call(
        axisBottom(x).tickValues([1,2,3,4,5]).tickPadding([6])
      );
    select("#y-axis")
      .call(
        axisLeft(y).tickValues([1,23,4,4,5,6,7,8])
      );
    // select("#line")
    //   .call(connectingLine());
  }

  renderTicks() {
    return this.props.data.map( (el, i) => (
      (
        <g className="tick"
          key={i}
          transform={`translate(-10, ${(height / this.props.data.length) * i})`}>
          <line x1="20" y1="5" x2="-4" y2="5" style={style}></line>
          <text>{i}</text>
        </g>
      )
    ));
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
          <path stroke="#000" d={`M 0, 0 L ${width}, 0`}></path>
          <g className="tick"
            tranform="translate(177.9, 0)"
            style={{opacity: 1}}>
            <line y2="6" x2="0"></line>
            <text dy=".71em" y="9" x="0">2001</text>
          </g>
        </g>
        <g
          className="y-axis">
          <path stroke="#000" d={`M 0, 30 L 0, ${height}`}></path>
          {this.renderTicks()}
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
