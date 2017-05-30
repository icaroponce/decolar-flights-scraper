'use strict';

const getDate = (opts) => {
  if(opts.type === 'roundtrip'){
    return `${opts.departureDate}/${opts.arriveDate}`;
  } else if(opts.type === 'one-way'){
    return opts.departureDate;
  } else {
    throw new Error("Invalid flight type");
  }
};

const getLocation = (opts) => {
  return `${opts.departureLocation}/${opts.arriveLocation}`;
}

// TODO: validate all args
const buildUrl = (opts) => {
  const airports = getLocation(opts)
    , dateInterval = getDate(opts)
    , adultNumber = opts.adultNumber || 1
    , childNumber = '0/0' // TODO: understand and implement 
    , fareType = opts.fareType || 'TOTALFARE'
    , sort = opts.sort || 'ASCENDING'
    , termination = 'NA/NA/NA/NA/NA' // TODO: understand and implement 
  ;

  const url = `${opts.type}/${airports}/${dateInterval}/${adultNumber}/${childNumber}/${fareType}/${sort}/${termination}`;
  return url;
};


module.exports = buildUrl;
