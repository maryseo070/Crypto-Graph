import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import ETHMonthContainer from './components/month/eth_month_container';

class App extends Component {

  componentDidMount() {
    this.props.fetchBitcoinPrice();
  }

  render() {
    let bit = this.props.bitcoin
    return (
      <div>
        {bit.USD}
        <ETHMonthContainer />
      </div>
    )
  }
}

App.propType = {
  bitcoin: PropTypes.object,
  fetchBitcoinPrice: PropTypes.function
};

App.defaultProps = {
  bitcoin: {}
};


export default App;
