'use strict';

/*
 * Return the proper parse function according to the options
 */
const getParseList = (opts) => {
  if (opts.fullDetail) {
    return getParseDetailList(flightsData);
  }

  return (flightsData) => parseList(flightsData);
};

const parseList = (flightsList) => {
  console.log(flightsList);
  const flights = flightsList.result.data.items.map(parseFlight);
  return flights;
};

const parseFlight = (flight) => {
  console.log(flight);

  return {
    priceTotal: flight.emissionPrice.total.fare.amount,
    priceCurrency: flight.emissionPrice.currency

  };
}
module.exports = getParseList;
