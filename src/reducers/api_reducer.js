import { RECEIVE_BIT,
  RECEIVE_ETH_MONTH } from '../actions/api_actions';
import { combineReducers } from 'redux';


export const bitcoinReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_BIT:
      return action.btc.BTC;
    default:
      return state;
  }
};

export const ethMonthReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ETH_MONTH:
      return action.eth.Data;
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  bitcoin: bitcoinReducer,
  ethMonth: ethMonthReducer
});

export default rootReducer;
