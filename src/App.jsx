import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Dimensions from 'react-dimensions';
import DataVisContainer from './components/DataVis_container.js';

export const App = () => {
  return (
    <div>
      <DataVisContainer />
    </div>
  );
}

App.propType = {
  bitcoin: PropTypes.object,
  fetchBitcoinPrice: PropTypes.function
};

App.defaultProps = {
  bitcoin: {}
};


export default Dimensions()(App);
