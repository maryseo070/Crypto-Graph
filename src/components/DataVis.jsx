import React, { Component } from 'react';
import './DataVis.css';
import { AxisX, AxisY, AxisYRight } from './Axis.jsx';
import { Line } from './Line.jsx';
import FormContainer from './Form_container.jsx';
import PropTypes from 'prop-types';
import Mouse from './Mouse.jsx';
import BtcLine from './BtcLine.jsx';
// import BtcMouse from './BtcMouse.jsx';

const margin = { top: 20, right: 30, bottom: 30, left: 40 };
const width = 1200 - margin.left - margin.right;
const height = 800 - margin.top - margin.bottom;


class DataVis extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: this.props.ethMonth,
      btcData: []
    };
    //fetch all data from API in constructor phase
    this.props.fetchETHDay();
    this.props.fetchBTCDay();
    this.props.fetchETHWeek();
    this.props.fetchBTCWeek();
    this.props.fetchETHYear();
    this.props.fetchBTCYear();
    this.handleClick = this.handleClick.bind(this);
    this.filter = this.filter.bind(this);
  }

  componentDidMount() {
    //default graph is set to monthly data
    this.props.fetchETHMonth().then(
      () => this.setState({data: this.props.ethMonth}));
    this.props.fetchBTCMonth().then(
      () => this.setState({btcData: this.props.btcMonth})
    );
  }

  handleClick(ethProp, btcProp) {
    //on click, I pass down the corresponding props as arguments
    //this function and using those arguments, set the state
    //since this.state.data and this.state.btcData are the data
    //being passed down to the components to render the line chart
    //changing the state will change what is shown on the graph
    return (e) => (
      this.setState({data: ethProp, btcData: btcProp})
    );
  }
  filter() {
    if (this.state.data === this.props.ethMonth) {
      return (
        <div>ETH price data from the past month:</div>
      );
    } else if (this.state.data === this.props.ethDay) {
      return (
        <div>ETH price data from the past 24 hours:</div>
      );
    } else if (this.state.data === this.props.ethYear) {
      return (
        <div>ETH price data from the past year:</div>
      );
    } else if (this.state.data === this.props.ethWeek) {
      return (
        <div>ETH price data from the past week:</div>
      );
    }

  }


  render () {
    return(
      <div className="wrapper-div">
        <h1 className="headers">Welcome to Crypto-Graph!</h1>
        <h2 className="headers">Check the price history of Ethereum (ETH) from the past day, week, month, or year</h2>
        <FormContainer />
        <section className="button-section">
          <button className="buttons" onClick={this.handleClick(this.props.ethDay, this.props.btcDay)}>Day</button>
          <button className="buttons" onClick={this.handleClick(this.props.ethWeek, this.props.btcWeek)}>Week</button>
          <button className="buttons" onClick={this.handleClick(this.props.ethMonth, this.props.btcMonth)}>Month</button>
          <button className="buttons" onClick={this.handleClick(this.props.ethYear, this.props.btcYear)}>Year</button>
        </section>
        <div>
          {this.filter()}
        </div>
      <svg
        className="svg"
        viewBox={`200 0 ${height} 1000`}
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
        <AxisYRight
          data={this.state.btcData}
          height={height}
          margin={margin}
          width={width}/>
        <Line
          data={this.state.data}
          height={height}
          margin={margin}
          width={width}/>
        <BtcLine
            data={this.state.btcData}
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
