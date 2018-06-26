import * as ApiUtil from '../util/api_util';
export const RECEIVE_BIT = "RECEIVE_BIT";
export const RECEIVE_ETH_MONTH = "RECEIVE_ETH_MONTH";
export const RECEIVE_ETH_DAY = "RECEIVE_ETH_DAY";
export const RECEIVE_ETH_WEEK = "RECEIVE_ETH_WEEK";
export const RECEIVE_ETH_YEAR = "RECEIVE_ETH_YEAR";
export const RECEIVE_ETH_DATE = "RECEIVE_ETH_DATE";
export const RECEIVE_BTC_MONTH = "RECEIVE_BTC_MONTH";
export const RECEIVE_BTC_YEAR = "RECEIVE_BTC_YEAR";

export const receiveETHDate = (price) => {
  return {
    type: RECEIVE_ETH_DATE,
    price
  };
};

export const fetchETHDate = (timestamp) => dispatch => {
  return ApiUtil.getETHDate(timestamp).then(
    price => dispatch(receiveETHDate(price))
  );
};

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

export const receiveBTCMonth = btc => {
  return {
    type: RECEIVE_BTC_MONTH,
    btc
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

export const receiveBTCYear = year => {
  return {
    type: RECEIVE_BTC_YEAR,
    year
  };
};


//daily for 31 days
export const fetchETHMonth = () => dispatch => {
  return ApiUtil.getETHMonth().then(
    eth => dispatch(receiveETHMonth(eth))
  );
};
export const fetchBTCMonth = () => dispatch => {
  return ApiUtil.getBTCMonth().then(
    btc => dispatch(receiveBTCMonth(btc))
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

export const fetchBTCYear = () => dispatch => {
  return ApiUtil.getBTCYear().then(
  year => dispatch(receiveBTCYear(year)));
};
