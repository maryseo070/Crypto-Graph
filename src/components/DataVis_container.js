import { fetchETHMonth,
          fetchETHDay,
          fetchETHWeek,
          fetchETHYear,
          fetchBTCMonth,
          fetchBTCYear } from './../actions/api_actions.js';
import DataVis from './DataVis.jsx';
import { connect } from 'react-redux';

const msp = state => {
  return {
    ethMonth: state.ethMonth,
    ethDay: state.ethDay,
    ethWeek: state.ethWeek,
    ethYear: state.ethYear,
    btcMonth: state.btcMonth,
    btcYear: state.btcYear
  };
};

const mdp = dispatch => {
  return {
    fetchETHMonth: () => dispatch(fetchETHMonth()),
    fetchETHDay: () => dispatch(fetchETHDay()),
    fetchETHWeek: () => dispatch(fetchETHWeek()),
    fetchETHYear: () => dispatch(fetchETHYear()),
    fetchBTCMonth: () => dispatch(fetchBTCMonth()),
    fetchBTCYear: () => dispatch(fetchBTCYear())
  };
};

export default connect(msp, mdp)(DataVis);
