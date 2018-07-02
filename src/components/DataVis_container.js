import { fetchETHMonth,
          fetchETHDay,
          fetchETHWeek,
          fetchETHYear,
          fetchBTCMonth,
          fetchBTCYear,
          fetchBTCDay,
          fetchBTCWeek } from './../actions/api_actions.js';
import DataVis from './DataVis.jsx';
import { connect } from 'react-redux';

const msp = state => {
  return {
    ethMonth: state.ethMonth,
    ethDay: state.ethDay,
    ethWeek: state.ethWeek,
    ethYear: state.ethYear,
    btcMonth: state.btcMonth,
    btcYear: state.btcYear,
    btcWeek: state.btcWeek,
    btcDay: state.btcDay
  };
};

const mdp = dispatch => {
  return {
    fetchETHMonth: () => dispatch(fetchETHMonth()),
    fetchETHDay: () => dispatch(fetchETHDay()),
    fetchETHWeek: () => dispatch(fetchETHWeek()),
    fetchETHYear: () => dispatch(fetchETHYear()),
    fetchBTCMonth: () => dispatch(fetchBTCMonth()),
    fetchBTCYear: () => dispatch(fetchBTCYear()),
    fetchBTCWeek: () => dispatch(fetchBTCWeek()),
    fetchBTCDay: () => dispatch(fetchBTCDay())
  };
};

export default connect(msp, mdp)(DataVis);
