import * as ApiUtil from '../util/api_util';
export const RECEIVE_BIT = "RECEIVE_BIT";
export const RECEIVE_ETH_MONTH = "RECEIVE_ETH_MONTH";

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

//daily for 31 days
export const fetchETHMonth = () => dispatch => {
  return ApiUtil.getETHMonth().then(
    eth => dispatch(receiveETHMonth(eth))
  );
};
