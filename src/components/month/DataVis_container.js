import { fetchETHMonth,
          fetchETHDay,
          fetchETHWeek,
          fetchETHYear } from './../../actions/api_actions.js';
import DataVis from './DataVis.jsx';
import { connect } from 'react-redux';

const msp = state => {
  return {
    ethMonth: state.ethMonth,
    ethDay: state.ethDay,
    ethWeek: state.ethWeek,
    ethYear: state.ethYear
  };
};

const mdp = dispatch => {
  return {
    fetchETHMonth: () => dispatch(fetchETHMonth()),
    fetchETHDay: () => dispatch(fetchETHDay()),
    fetchETHWeek: () => dispatch(fetchETHWeek()),
    fetchETHYear: () => dispatch(fetchETHYear())
  };
};

export default connect(msp, mdp)(DataVis);
