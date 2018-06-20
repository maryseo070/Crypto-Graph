import { fetchETHMonth, fetchETHDay } from './../../actions/api_actions.js';
import DataVis from './DataVis.jsx';
import { connect } from 'react-redux';

const msp = state => {
  return {
    ethMonth: state.ethMonth,
    ethDay: state.ethDay
  };
};

const mdp = dispatch => {
  return {
    fetchETHMonth: () => dispatch(fetchETHMonth()),
    fetchETHDay: () => dispatch(fetchETHDay())
  };
};

export default connect(msp, mdp)(DataVis);
