import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import ETHMonthContainer from './components/month/eth_month_container';

class App extends Component {

  componentDidMount() {
    this.props.fetchBitcoinPrice();
  }

  render() {
    return (
      <div>
        {this.props.bitcoin.BTC}
        <ETHMonthContainer />
      </div>
    )
  }
}

App.propTyope = {
  bitcoin: PropTypes.object,
  fetchBitcoinPrice: PropTypes.function
};

App.defaultProps = {
  bitcoin: {}
};


export default App;
