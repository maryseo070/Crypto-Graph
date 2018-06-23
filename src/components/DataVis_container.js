import { fetchETHMonth,
          fetchETHDay,
          fetchETHWeek,
          fetchETHYear,
          fetchBTCMonth } from './../actions/api_actions.js';
import DataVis from './DataVis.jsx';
import { connect } from 'react-redux';

const msp = state => {
  return {
    ethMonth: state.ethMonth,
    ethDay: state.ethDay,
    ethWeek: state.ethWeek,
    ethYear: state.ethYear,
    btcMonth: state.btcMonth
  };
};

const mdp = dispatch => {
  return {
    fetchETHMonth: () => dispatch(fetchETHMonth()),
    fetchETHDay: () => dispatch(fetchETHDay()),
    fetchETHWeek: () => dispatch(fetchETHWeek()),
    fetchETHYear: () => dispatch(fetchETHYear()),
    fetchBTCMonth: () => dispatch(fetchBTCMonth())
  };
};

export default connect(msp, mdp)(DataVis);
