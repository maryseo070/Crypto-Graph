import { RECEIVE_BIT } from '../actions/api_actions';
import { merge } from 'lodash';

const apiReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_BIT:
    return action.btc;
    default:
    return state;
  }
};

export default apiReducer;
