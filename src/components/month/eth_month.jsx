import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ETHMonth extends Component {

  componentDidMount() {
    this.props.fetchETHMonth();
  }

  render() {
    return (
      <div>
        ETH month section
      </div>
    );
  }
}

ETHMonth.PropType = {
  eth: PropTypes.array,
  fetchETHMonth: PropTypes.func
};

ETHMonth.defaultProps = {
  eth: []
};
export default ETHMonth;
