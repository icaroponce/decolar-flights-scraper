'use strict';

const getDate = (opts) => {
  if(opts.types === 'roundtrip'){
    return `${opts.departureDate}/${opts.arriveDate}`;
  } else {
    return opts.departureDate;
  }
};

const getAirports = (opts) => {
  if(opts.types === 'roundtrip'){
    return `${opts.departureAirport}/${opts.arriveAirport}`;
  } else {
    return opts.airportDeparture;
  }
}

// TODO: validate all args
const buildUrl = (opts) => {
  const airports = getAirports(opts)
    , dateInterval = getDate(opts)
    , adultAmount = opts.adultAmount || 1
    , childAmount = '0/0' // TODO: understand and implement 
    , fareType = opts.fareType || 'TOTALFARE'
    , sort = opts.sort || 'ASCENDING'
    , termination = 'NA/NA/NA/NA/NA' // TODO: understand and implement 
  ;

  // https://www.decolar.com/shop/flights/data/search/roundtrip/sao/fra/2017-06-19/2017-06-25/1/0/0/TOTALFARE/ASCENDING/NA/NA/NA/NA

  const url = `/${opts.type}/${airports}/${dateInterval}/${adultAmount}/${childAmount}/${fareType}/${sort}/${termination}`;
  return url;
};


module.exports = buildUrl;
