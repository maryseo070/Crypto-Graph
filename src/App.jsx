import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Dimensions from 'react-dimensions';
import DataVis from './components/month/DataVis.jsx';

class App extends Component {

  componentDidMount() {
    this.props.fetchBitcoinPrice();
  }

  render() {

    return (
      <div>
        <DataVis />
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
