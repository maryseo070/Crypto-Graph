import React, { Component } from 'react';
import './DataVis.css';
import { AxisX, AxisY } from './Axis.jsx';
import { Line } from './line.jsx';
import PropTypes from 'prop-types';
import { fetchETHMonth } from './../../actions/api_actions';
import { connect } from 'react-redux';

const size = 700;
const margin = { top: 20, right: 30, bottom: 30, left: 40 };
const width = 1000 - margin.left - margin.right;
const height = 650 - margin.top - margin.bottom;

class DataVis extends Component {
  constructor(props){
    super(props);
    this.state = {
      ethDay: this.props.ethDay,
      ethMonth: this.props.ethMonth
    }
    this.props.fetchETHMonth();
    this.props.fetchETHDay();
    this.renderDataDots = this.renderDataDots.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
  }

  handleClick(data) {

    console.log(data)
  }

  renderDataDots() {
    return this.props.ethMonth.map( (point, index) => (
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
      <div className="wrapper-div">
        <input type="button" name="data" value="ETH Day Data" onClick={() => this.handleClick(this.props.ethDay)} />
      <svg
        width={width}
        height={height}
        style={{padding: "40px"}}
        viewBox={`0 0 ${size} ${size}`}
        tranform={`translate(${margin.left}, ${margin.top})`}>
        <AxisX
          data={this.props.ethMonth}
          height={height}
          width={width}/>
        <AxisY
          data={this.props.ethMonth}
          height={height}
          margin={margin}
          width={width}/>
        <Line
          data={this.props.ethMonth}
          height={height}
          margin={margin}
          width={width}/>

      </svg>
    </div>
    );
  }
}

export default DataVis;

DataVis.propType = {
  data: PropTypes.array
};

DataVis.defaultProps = {
  data: []
};

// export default DataVis;
