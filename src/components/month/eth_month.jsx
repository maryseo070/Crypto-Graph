import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataVis from './DataVis.jsx';
import './eth_month.css';

class ETHMonth extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.showETHdata = this.showETHdata.bind(this);
  }

  componentDidMount() {
    this.props.fetchETHMonth();
  }

  showETHdata() {
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
