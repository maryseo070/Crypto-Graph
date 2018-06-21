import React, { Component } from 'react';
import './DataVis.css';
import { AxisX, AxisY } from './Axis.jsx';
import { Line } from './line.jsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Mouse from './mouse.jsx';

const size = 700;
const margin = { top: 20, right: 30, bottom: 30, left: 40 };
const width = 1000 - margin.left - margin.right;
const height = 650 - margin.top - margin.bottom;

class DataVis extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: this.props.ethMonth
    };
    this.props.fetchETHDay();
    this.props.fetchETHWeek();
    this.props.fetchETHYear();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchETHMonth().then(
      () => this.setState({data: this.props.ethMonth}))
  }

  handleClick(prop) {
    return (e) => (
      this.setState({data: prop})
    );
  }

  render () {
    return(
      <div className="wrapper-div">
        <button onClick={this.handleClick(this.props.ethDay)}>ETH DAY</button>
        <button onClick={this.handleClick(this.props.ethMonth)}>ETH MONTH</button>
        <button onClick={this.handleClick(this.props.ethWeek)}>ETH WEEK</button>
        <button onClick={this.handleClick(this.props.ethYear)}>ETH YEAR</button>
      <svg
        width={width}
        height={height}
        style={{padding: "40px"}}
        viewBox={`0 0 ${size} ${size}`}
        tranform={`translate(${margin.left}, ${margin.top})`}>
        <AxisX
          data={this.state.data}
          height={height}
          width={width}/>
        <AxisY
          data={this.state.data}
          height={height}
          margin={margin}
          width={width}/>
        <Line
          data={this.state.data}
          height={height}
          margin={margin}
          width={width}/>
        <Mouse
          data={this.state.data}
          height={height}
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
