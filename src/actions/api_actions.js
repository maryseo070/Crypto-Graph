import * as ApiUtil from '../util/api_util';
export const RECEIVE_BIT = "RECEIVE_BIT";

export const receiveBitcoinPrice = (btc) => {
  return {
    type: RECEIVE_BIT,
    btc
  };
};

export const fetchBitcoinPrice = btc => dispatch => {
  return ApiUtil.getBitcoin().then(
    price => dispatch(receiveBitcoinPrice(price))
  );
};
