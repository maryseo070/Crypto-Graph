import React from 'react';
import { connect } from 'react-redux';
import { fetchBitcoinPrice } from './actions/api_actions';
import App from './App';

const msp = state => {
  debugger
  return {
    bitcoin: state.BTC
  };
};

const mdp = dispatch => {
  return {
    fetchBitcoinPrice: () => dispatch(fetchBitcoinPrice())
  };
};


export default connect(msp, mdp)(App);
