import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from "d3";
import PieChart from './PieChart.jsx';

class ETHMonth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
      { label: '<5', value: 2704659 },
      { label: '5-13', value: 4499890 },
      { label: '14-17', value: 2159981 },
      { label: '18-24', value: 3853788 },
      { label: '25-44', value: 14106543 },
      { label: '45-64', value: 8819342 },
      { label: '≥65', value: 612463 },
    ]
  };
    this.showETHdata = this.showETHdata.bind(this);
  }

  componentDidMount() {
    this.props.fetchETHMonth();
  }

  showETHdata() {
    const containerWidth = '200px';
    const containerHeight = "200px";
    const data = this.state.data;
    return (
      <div>
        <PieChart
          data={data}
          width={containerWidth}
          height={containerHeight}
        />
      </div>
    );
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
