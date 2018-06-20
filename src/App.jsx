import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import ETHMonthContainer from './components/month/eth_month_container';
import Dimensions from 'react-dimensions';
class App extends Component {

  componentDidMount() {
    this.props.fetchBitcoinPrice();
  }

  render() {

    return (
      <div>
        <ETHMonthContainer />
          <div id="graphic"></div>
      </div>
    );
  }
}

App.propType = {
  bitcoin: PropTypes.object,
  fetchBitcoinPrice: PropTypes.function
};

App.defaultProps = {
  bitcoin: {}
};


export default Dimensions()(App);
