import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataVis from './DataVis.jsx';
import './eth_month.css';

class ETHMonth extends Component {
  constructor(props) {
    super(props);
    this.state = {
    datavis: [
      [new Date(2001, 0, 1), 1],
      [new Date(2002, 0, 1), 2],
      [new Date(2003, 0, 1), 2],
      [new Date(2004, 0, 1), 3],
      [new Date(2005, 0, 1), 4],
      [new Date(2006, 0, 1), 5],
      [new Date(2007, 0, 1), 6],
      [new Date(2008, 0, 1), 6],
      [new Date(2009, 0, 1), 6],
    ]
  };
    this.showETHdata = this.showETHdata.bind(this);
  }

  componentDidMount() {
    this.props.fetchETHMonth();
  }

  showETHdata() {
    const datavis = this.state.datavis;
    const ethData = this.props.eth;

    return (
      <div>
        <DataVis
          data={ethData}
          />
      </div>
    );
  }

  render() {
    return (
      <div>
        <DataVis />
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
