'use strict';

const request = require('./utils/request');
const BASE_URL = 'https://autocomplete.despegar.com/autocomplete/search?flow_code=flight&product=flights';

const getAirportCode = (opts) => {

  const queryUrl = `locale=${opts.locale}&query=${opts.query}`;

  return new Promise((resolve, reject) => {
    if (opts.query.length < 3) {
      return reject(new Error('Query must have at least 3 chars'));
    } 
    return request({url: `${BASE_URL}&${queryUrl}`})
      .then(JSON.parse)
      .then(resolve)
      .catch(reject)
  });
};

module.exports = getAirportCode;
