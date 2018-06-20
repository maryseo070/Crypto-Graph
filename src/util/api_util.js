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


export const getETHMonth = () => {
  return $.ajax({
    type: 'GET',
    url: "https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=31",
    success(eth) {
      return eth;
    },
    error() {
      console.log("An error occurred.");
    },
  });
};

export const getETHDay = () => {
  return $.ajax({
    type: "GET",
    url: "https://min-api.cryptocompare.com/data/histohour?fsym=ETH&tsym=USD&limit=24",
    success(day){
      return day;
    },
    error() {
      console.log('could not retrieve day data in util')
    }
  })
}
// https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=10
