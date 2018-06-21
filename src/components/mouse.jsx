import React, {Component} from 'react';
import './mouse.css';
import { select, clientPoint, mouse, event } from 'd3-selection';
import * as d3 from 'd3';
import { scaleTime, scaleLinear } from 'd3-scale';
import { bisector } from 'd3-array';
import { format } from 'd3-format';
import { timeFormat, timeParse } from 'd3-time-format';

var focusStyle = {
  display: "none"
};

function parseDate(date) {
  let time = timeParse("%x");
  return timeParse(date);
}

function dateString(object) {
  let time = new Date(parseInt(object.time.toString() + "000"));
  return time.toLocaleDateString();
}

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
    let data = this.props.data;
    let _this = this;
    select('.overlay').on("mousemove", _this.mousemove);
    this.setState({data: this.props.data});
    let time;
    if (Array.isArray(data)) {
      data.forEach(function(d) { time = parseDate(dateString(d.time)); })
    }
  }

  mouseOut() {
    select(".focus").style("diplay", "none");
  }

  mouseOver() {
    select(".focus").style("display", null);
    // console.log("OVER");
  }

  mousemove() {
    // console.log("moving!");
    let data = this.props.data;
    let width = this.props.width;
    let height = this.props.height;
    let focus = select(".focus");

    let x = scaleTime()
      .range([0, width]);

    let y = scaleLinear()
      .range([height, 0]);

    if (Object.keys(data).length === 0 || event === null) {
      console.log("ZERO DATA");
    } else {
      // console.log("NOT ZERO DATA");
      x.domain([data[0].time, data[data.length - 1].time]);
      y.domain(d3.extent(data, function(d) {return d.open; }));

      let overlay = select('.overlay').node();
      let x0 = x.invert(clientPoint(overlay, event)[0]);

      let i = bisectDate(data, x0, 1);
      let d0 = data[i - 1];
      let d1 = data[i];
      if (d1 === "undefined") {
        d1 = d0;
      }
      console.log(d0)
      console.log(d1)
      let d = x0 - d0.time > d1.time - x0 ? d1 : d0;
      let day = dateString(d);
      let parseDay = parseDate(day);
      focus.attr("transform", "translate(" + x(parseDate(d.time)) + "," + y(d.open) + ")")
      focus.select("text").text(
        "Date: " + parseDay)
      focus.select("text")
        .append("tspan")
        .text("Open: " + formatCurrency(d.open))
        .attr("x", 9)
        .attr("y", 30)
      focus.select("text")
        .append("tspan")
        .text("Close: " + formatCurrency(d.close))
        .attr("x", 9)
        .attr("y", 50)
      focus.select("text")
        .append("tspan")
        .text("High: " + formatCurrency(d.high))
        .attr("x", 9)
        .attr("y", 70)
      focus.select("text")
        .append("tspan")
        .text("Low: " + formatCurrency(d.low))
        .attr("x", 9)
        .attr("y", 90)

    }
  }

  render() {
    return (
      <g>
        <g className="focus" style={focusStyle}>
          <circle r="7" className="circle-mouse"></circle>
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
