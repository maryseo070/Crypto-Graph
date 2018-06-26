import { fetchETHDate } from './../actions/api_actions.js';
import Form from './Form.jsx';
import { connect } from 'react-redux';

const msp = state => {
  return {
    ethDate: state.ethDate
  };
};

const mdp = dispatch => {
  return {
    fetchETHDate: (timestamp) => dispatch(fetchETHDate(timestamp))
  };
};

export default connect(msp, mdp)(Form);
