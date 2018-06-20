import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Dimensions from 'react-dimensions';
import DataVisContainer from './components/month/DataVis_container.js';

class App extends Component {
  render() {

    return (
      <div>
        <DataVisContainer />
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
