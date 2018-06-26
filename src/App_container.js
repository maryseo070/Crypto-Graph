import { connect } from 'react-redux';
import { fetchBitcoinPrice,
          fetchETHMonth } from './actions/api_actions';
import App from './App';

const msp = state => {
  return {
    bitcoin: state.bitcoin,
    ethMonth: state.ethMonth
  };
};

const mdp = dispatch => {
  return {
    fetchBitcoinPrice: () => dispatch(fetchBitcoinPrice()),
    fetchETHMonth: () => dispatch(fetchETHMonth())
  };
};


export default connect(msp, mdp)(App);
