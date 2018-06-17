import { connect } from 'react-redux';
import { fetchETHMonth } from './../../actions/api_actions';
import ETHMonth from './eth_month';

const msp = state => {
  return {
    eth: state
  };
};

const mdp = dispatch => {
  return {
    fetchETHMonth: () => dispatch(fetchETHMonth())
  };
};

export default connect(msp, mdp)(ETHMonth);
