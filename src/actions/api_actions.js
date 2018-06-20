import * as ApiUtil from '../util/api_util';
export const RECEIVE_BIT = "RECEIVE_BIT";
export const RECEIVE_ETH_MONTH = "RECEIVE_ETH_MONTH";
export const RECEIVE_ETH_DAY = "RECEIVE_ETH_DAY";
export const RECEIVE_ETH_WEEK = "RECEIVE_ETH_WEEK";
export const RECEIVE_ETH_YEAR = "RECEIVE_ETH_YEAR";

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

export const receiveETHWeek = week => {
  return {
    type: RECEIVE_ETH_WEEK,
    week
  };
};

export const receiveETHYear = year => {
  return {
    type: RECEIVE_ETH_YEAR,
    year
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

export const fetchETHWeek = () => dispatch => {
  return ApiUtil.getETHWeek().then(
  week => dispatch(receiveETHWeek(week)));
};

export const fetchETHYear = () => dispatch => {
  return ApiUtil.getETHYear().then(
  year => dispatch(receiveETHYear(year)));
};
