import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PieChart from './PieChart.jsx';
import DataVis from './DataVis.jsx';
import './eth_month.css';

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
    ],
    datavis: [
      [new Date(2001, 0, 1), 1],
      [new Date(2002, 0, 1), 2],
      [new Date(2003, 0, 1), 2],
      [new Date(2004, 0, 1), 3],
      [new Date(2005, 0, 1), 4],
      [new Date(2006, 0, 1), 5]
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
    const data2 = this.state.datavis;
    return (
      <div className="wrapper-div">
        <PieChart
          data={data}
          width={containerWidth}
          height={containerHeight}
        />
        <DataVis
          data={data2}
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
