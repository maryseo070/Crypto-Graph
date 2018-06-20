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

const msp = state => {
  return {
    eth: state.ethMonth
  };
};

const mdp = dispatch => {
  return {
    fetchETHMonth: () => dispatch(fetchETHMonth())
  };
};



class DataVis extends Component {
  constructor(props){
    super(props);
    this.props.fetchETHMonth();
    this.renderDataDots = this.renderDataDots.bind(this);
  }
  componentDidMount() {
  }

  renderDataDots() {
    return this.props.eth.map( (point, index) => (
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
        style={{padding: "40px"}}
        viewBox={`0 0 ${size} ${size}`}
        tranform={`translate(${margin.left}, ${margin.top})`}>
        <AxisX
          data={this.props.eth}
          height={height}
          width={width}/>
        <AxisY
          data={this.props.eth}
          height={height}
          margin={margin}
          width={width}/>
        <Line
          data={this.props.eth}
          height={height}
          margin={margin}
          width={width}/>

      </svg>
    );
  }
}
export default connect(msp, mdp)(DataVis);
DataVis.propType = {
  data: PropTypes.array
};

DataVis.defaultProps = {
  data: []
};

// export default DataVis;
