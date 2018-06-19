import React, { Component } from 'react';
// import { axis } from 'd3-axis';
import './DataVis.css';
import * as d3 from 'd3';
import { scaleLinear,scaleTime } from 'd3-scale';
import { ticks, axisBottom, axisLeft } from 'd3-axis';
import { line } from 'd3-shape';
import { select } from 'd3-selection';
import * as d3Axis from 'd3-axis';

const size = 700;
const margin = { top: 20, right: 30, bottom: 30, left: 40 };
const width = 960 - margin.left - margin.right;
const height = 650 - margin.top - margin.bottom;

const x = scaleTime()
  .domain([new Date(2001, 0, 1)], new Date(2006, 0, 1))
  .range(([0, width]));

const y = scaleLinear()
  .domain([0, 6])
  .range([height, 0]);

const xAxis = axisBottom();

const yAxis = axisLeft()
  .ticks(5, "s")
  .tickPadding(5);

  // .scale(y);

const connectingLine = line()
  // .interpolate("monotone")
  .x(function(d) { return x(d[0]); })
  .y(function(d) { return y(d[1]); });

const style = {opacity: 1, stroke: "black"};


class DataVis extends Component {
  constructor(props){
    super(props);
    this.renderYTicks = this.renderYTicks.bind(this);
    this.renderXTicks = this.renderXTicks.bind(this);
  }
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

  renderYTicks() {
    // let dataReversed = this.props.data.reverse();
    // TODO: re-distribute ticks


    let section = (height) / this.props.data.length;
    return this.props.data.map( (el, i) => (
      (
        <g className="tick"
          key={i}
          transform={`translate(-10, ${section * i + 30})`}>
          <line x1="15" y1="-3" x2="5" y2="-3" style={style}></line>
          <text>{el[1]}</text>
        </g>
      )
    ));
  }

  renderXTicks() {
    let section = (width) / this.props.data.length;

    return this.props.data.map( (el, i) => (
    (
      <g className="tickX"
        key={i}
        transform={`translate(${section * i + 30}, 35)`}>
        <line y2="6" x2="0"></line>
        <text dy=".71em" y="9" x="0">{Date.parse(el[0])}</text>
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
          {this.renderXTicks()}
        </g>
        <g
          className="y-axis">
          <path stroke="#000" d={`M 0, 30 L 0, ${height}`}></path>
          {this.renderYTicks()}
        </g>
        <circle
              className="dot"
              cx={100}
              cy={100}
              r="3.5"
              >
        </circle>

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
