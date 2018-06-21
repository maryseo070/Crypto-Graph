import React, {Component} from 'react';
import './mouse.css';
import { select, selectAll, mouse } from 'd3-selection';
import { schemeCategory10 } from 'd3-scale-chromatic';
import * as d3 from 'd3';
import { scaleOrdinal, scaleTime, scaleLinear } from 'd3-scale';
import { timeFormat } from 'd3-time-format';

//    var color = d3.scale.category10();

var focusStyle = {
  display: "none"
};

class Mouse extends Component {
  constructor(props) {
    super(props);
  }

  mouseOut() {
    select(".focus").style("diplay", "none")
    console.log(":Out")
  }

  render() {
    return (
      <g>
        <g className="focus" style={focusStyle}>
          <circle r="7"></circle>
          <text x="9" dy=".35em"></text>
        </g>
        <rect
          className="overlay"
          width="860"
          height="450"
          onMouseOut={this.mouseOut}
          onMouseOver={this.mouseOver}
          onMouseMove={this.mousemove}></rect>
      </g>
    );
  }
}

export default Mouse;
