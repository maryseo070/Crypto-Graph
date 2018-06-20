import * as ApiUtil from '../util/api_util';
export const RECEIVE_BIT = "RECEIVE_BIT";
export const RECEIVE_ETH_MONTH = "RECEIVE_ETH_MONTH";
export const RECEIVE_ETH_DAY = "RECEIVE_ETH_DAY";

export const receiveBitcoinPrice = (btc) => {
  return {
    type: RECEIVE_BIT,
    btc
  };
};

export const fetchBitcoinPrice = () => dispatch => {
  return ApiUtil.getBitcoin().then(
    btc => dispatch(receiveBitcoinPrice(btc))
  );
};


export const receiveETHMonth = (eth) => {
  return {
    type: RECEIVE_ETH_MONTH,
    eth
  };
};

export const receiveETHDay = (day) => {
  return {
    type: RECEIVE_ETH_DAY,
    day
  };
};

//daily for 31 days
export const fetchETHMonth = () => dispatch => {
  return ApiUtil.getETHMonth().then(
    eth => dispatch(receiveETHMonth(eth))
  );
};

export const fetchETHDay = () => dispatch => {
  return ApiUtil.getETHDay().then(
  day => dispatch(receiveETHDay(day)));
};
