'use strict';

/*
 * Return the proper parse function according to the options
 */
const getParseList = (opts) => {
  if (opts.fullDetail) {
    return (flightsData) => ParseDetailList(flightsData);
  }

  return (flightsData) => parseList(flightsData);
};

// TODO: implement
const parseDetailList = (flightsData) => flightsData;

const parseList = (flightsData) => {
  return flightsData.result.data.items.map(parseFlight);
};

const parseFlight = (flight) => {
  return {
    totalPrice: flight.emissionPrice.total.fare.amount,
    currencyPriceCode: flight.emissionPrice.currencyCode,
    seatsRemaining: flight.seatsRemaining,
    airlines: flight.airlineCodes
  };
}
module.exports = getParseList;
