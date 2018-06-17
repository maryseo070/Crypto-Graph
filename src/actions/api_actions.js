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
    price => dispatch(receiveBitcoinPrice(price))
  );
};


export const receiveETHMonth = price => {
  return {
    type: RECEIVE_ETH_MONTH,
    price
  };
};

//daily for 31 days
export const fetchETHMonth = etc => dispatch => {
  return ApiUtil.getETHMonth().then(
    eth => dispatch(receiveETHMonth(etc))
  );
};
