import { RECEIVE_BIT,
        RECEIVE_ETH_MONTH,
        RECEIVE_ETH_DAY,
        RECEIVE_ETH_WEEK,
        RECEIVE_ETH_YEAR,
        RECEIVE_ETH_DATE } from '../actions/api_actions';
import { combineReducers } from 'redux';

export const ethDateReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ETH_DATE:
      return action.price.ETH.USD;
    default:
      return state;
  }
};


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

export const ethDayReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ETH_DAY:
      return action.day.Data;
    default:
      return state;
  }
};

export const ethWeekReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ETH_WEEK:
      return action.week.Data;
    default:
      return state;
  }
};

export const ethYearReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ETH_YEAR:
      return action.year.Data;
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  bitcoin: bitcoinReducer,
  ethMonth: ethMonthReducer,
  ethDay: ethDayReducer,
  ethWeek: ethWeekReducer,
  ethYear: ethYearReducer,
  ethDate: ethDateReducer
});

export default rootReducer;
