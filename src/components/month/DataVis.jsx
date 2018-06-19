import React, { Component } from 'react';
// import { axis } from 'd3-axis';
import './DataVis.css';
import * as d3 from 'd3';
import { scaleLinear,scaleTime } from 'd3-scale';
import { ticks, axisBottom, axisLeft } from 'd3-axis';
import { line } from 'd3-shape';
import { select } from 'd3-selection';
import * as d3Axis from 'd3-axis';
import { AxisX, AxisY } from './Axis.jsx';
import { Line } from './line.jsx'

const size = 700;
const margin = { top: 20, right: 30, bottom: 30, left: 40 };
const width = 960 - margin.left - margin.right;
const height = 650 - margin.top - margin.bottom;

// const connectingLine = line()
//   // .interpolate("monotone")
//   .x(function(d) { return x(d[0]); })
//   .y(function(d) { return y(d[1]); });

const style = {opacity: 1, stroke: "black"};


class DataVis extends Component {
  constructor(props){
    super(props);
    this.renderDataDots = this.renderDataDots.bind(this);
  }

  renderDataDots() {
    return this.props.data.map( (point, index) => (
      <circle
            className="dot"
            cx={point[0]}
            cy={point[1]}
            r="3.5"
            >
      </circle>
    ));
  }

  render () {
    return(
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${size} ${size}`}
        tranform={`translate(${margin.left}, ${margin.top})`}>
        <AxisX
          data={this.props.data}
          height={height}
          width={width}/>
        <AxisY
          data={this.props.data}
          height={height}
          margin={margin}
          width={width}/>
        <Line
          data={this.props.data}
          height={height}
          margin={margin}
          width={width}/>

        {this.renderDataDots()}

      </svg>

    );
  }
}

export default DataVis;
