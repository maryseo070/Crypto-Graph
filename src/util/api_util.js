import $ from 'jquery';

export const getBitcoin = () => {
  return $.ajax({
    type: 'GET',
    url: "https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=1529082000",
    success(btc) {
      return btc;
    },
    error() {
      console.log("An error occurred.");
    },
  });
};
