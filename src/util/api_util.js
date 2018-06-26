import $ from 'jquery';

export const getETHDate = (timestamp) =>{
  return $.ajax({
    type: "GET",
    url: `https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=USD&ts=${timestamp}`,
    success(price) {
      return price;
    },
    error() {
      console.log("error in api_util from ethDate");
    }
  });
};

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

export const getETHYear = () => {
  return $.ajax({
    type: "GET",
    url: "https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=364",
    success(year) {
      return year;
    },
    error() {
      console.log('could not retrieve year data in util');
    }
  });
};
export const getBTCYear = () => {
  return $.ajax({
    type: "GET",
    url: "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=365",
    success(year) {
      return year;
    },
    error() {
      console.log('could not retrieve year data in util');
    }
  });
};


export const getETHMonth = () => {
  return $.ajax({
    type: 'GET',
    url: "https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=30",
    success(eth) {
      return eth;
    },
    error() {
      console.log("An error occurred.");
    },
  });
};

export const getBTCMonth = () => {
  return $.ajax({
    type: 'GET',
    url: "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=30",
    success(btc) {
      return btc;
    },
    error() {
      console.log("An error occurred.");
    },
  });
};


export const getETHWeek = () => {
  return $.ajax({
    type: "GET",
    url: "https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=10",
    success(week) {
      return week;
    },
    error() {
      console.log('could not retrieve week data in util');
    }
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
      console.log('could not retrieve day data in util');
    }
  });
};
