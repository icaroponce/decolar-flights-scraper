'use strict';

const request = require('./utils/request');
const BASE_URL = 'https://autocomplete.despegar.com/autocomplete/search?flow_code=flights&product=flights';

const getAirportCode = (opts) => {

  const locale = opts.locale || 'en_US';
  const queryUrl = `locale=${locale}&query=${opts.query}`;
  const headers = {
    Host: 'autocomplite.despegar.com',
  };

  return new Promise((resolve, reject) => {
    if (opts.query.length < 3) {
      return reject(new Error('Query must have at least 3 chars'));
    } 
    return request({url: `${BASE_URL}&${queryUrl}`, headers })
      .then(JSON.parse)
      .then(resolve)
      .catch(reject)
  });
};

module.exports = getAirportCode;
