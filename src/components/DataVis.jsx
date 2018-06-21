import React, { Component } from 'react';
import './DataVis.css';
import { AxisX, AxisY } from './Axis.jsx';
import { Line } from './line.jsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Mouse from './mouse.jsx';
import $ from 'jquery';

const margin = { top: 20, right: 30, bottom: 30, left: 40 };
const width = 1200 - margin.left - margin.right;
const height = 800 - margin.top - margin.bottom;

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
      () => this.setState({data: this.props.ethMonth}));
  }

  handleClick(prop) {
    return (e) => (
      this.setState({data: prop})
    );
  }

  render () {

    return(
      <div className="wrapper-div">
        <h1 className="headers">Welcome to Crypto-Graph!</h1>
        <h2 className="headers">Check the price history of Ethereum (ETH) from the past day, week, month, or year</h2>
        <section className="button-section">
          <button className="buttons" onClick={this.handleClick(this.props.ethDay)}>Day</button>
          <button className="buttons" onClick={this.handleClick(this.props.ethWeek)}>Week</button>
          <button className="buttons" onClick={this.handleClick(this.props.ethMonth)}>Month</button>
          <button className="buttons" onClick={this.handleClick(this.props.ethYear)}>Year</button>
        </section>
      <svg
        className="svg"
        viewBox={`200 0 ${height} 900`}
        width={width}
        height={height}
        style={{padding: "40px"}}
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
