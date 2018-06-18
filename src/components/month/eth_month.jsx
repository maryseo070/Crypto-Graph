import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from "d3";


class ETHMonth extends Component {
  constructor(props) {
    super(props);
    this.showETHdata = this.showETHdata.bind(this);
  }

  componentDidMount() {
    this.props.fetchETHMonth();
  }

  showETHdata() {
    // let eth = this.props.eth;
    // if (eth.length > 0) {
    //   return eth.map( (data, i) => (
    //     <ul key={i}>
    //       <li>{data.time}</li>
    //       <li>{data.close}</li>
    //       <li>{data.high}</li>
    //       <li>{data.low}</li>
    //       <li>{data.open}</li>
    //     </ul>
    //   ));
    // }

    var svg = d3.select("body").append("svg")
      .attr("height", 200)
      .attr("width", 200);
    var circles = d3.selectAll("circle")
      .data({"x_axis": 30, "y_axis": 30, "radius": 20, "color" : "green"});

    return circles;

  }

  render() {
    return (
      <div>
        {this.showETHdata()}
      </div>
    );
  }
}

ETHMonth.propType = {
  eth: PropTypes.array,
  fetchETHMonth: PropTypes.func
};

ETHMonth.defaultProps = {
  eth: []
};

export default ETHMonth;
