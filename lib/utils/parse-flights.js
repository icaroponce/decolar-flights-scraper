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
  const airlines = flightsData.result.data.airlines;
  const flights = flightsData.result.data.items.map(flight => Object.assign({
    airlines: flight.airlineCodes.map(code => airlines[code])
  }, flight));
  return flights.map(parseFlight);
};

const parseFlight = flight => ({
  totalPrice: flight.emissionPrice.total.fare.amount,
  currencyPriceCode: flight.emissionPrice.currencyCode,
  airlines: flight.airlines
});

module.exports = getParseList;
