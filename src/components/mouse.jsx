import React, {Component} from 'react';
import './mouse.css';
import { select, mouse, event } from 'd3-selection';
import * as d3 from 'd3';
import { scaleTime, scaleLinear } from 'd3-scale';
import { bisector } from 'd3-array';
import { format } from 'd3-format';

var focusStyle = {
  display: "none"
};

var bisectDate = bisector(function(d) { return d.time; }).left;
var formatValue = format(",.2f");
var formatCurrency = function(d) {return "$" + formatValue(d); };

class Mouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
    this.mouseOut = this.mouseOut.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    this.mousemove = this.mousemove.bind(this);
  }

  componentDidMount() {
    let _this = this;
    select('.overlay').on("mousemove", _this.mousemove);
    this.setState({data: this.props.data});
  }

  mouseOut() {
    select(".focus").style("diplay", "none");
    console.log(":Out");
  }

  mouseOver() {
    select(".focus").style("display", null);
    console.log("OVER");
  }

  mousemove() {
    console.log("moving!");
    let data = this.props.data;
    let width = this.props.width;
    let height = this.props.height;
    let focus = select(".focus");

    let x = scaleTime()
      .range([0, width]);

    let y = scaleLinear()
      .range([height, 0]);

    if (data.length === 0 || Object.keys(data).length === 0) {
      console.log("ZERO DATA");
    } else {
      console.log(event);
      console.log("NOT ZERO DATA");
      x.domain([data[0].time, data[data.length - 1].time]);
      y.domain([d3.extent(data, function(d) {return d.open; })]);

      let overlay = select('.overlay').node();
      let x0 = x.invert(mouse(overlay)[0]);
      let i = bisectDate(data, x0, 1);
      let d0 = data[i - 1];
      let d1 = data[i];
      let d = x0 - d0.time > d1.time - x0 ? d1 : d0;
      focus.attr("transform", "translate(" + x(d.time) + "," + y(d.open) + ")");
      focus.select("text").text(formatCurrency(d.open) + " " + d.time);

    }
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
          width={this.props.width}
          height={this.props.height}
          onMouseOut={this.mouseOut}
          onMouseOver={this.mouseOver}
          onMouseMove={this.mousemove}
          >
        </rect>
      </g>
    );
  }
}

export default Mouse;
