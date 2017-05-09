'use strict';

const requestLib = require('request'),
  debug = require('debug')('request');

const doRequest = ({url, headers}) => {
  let req = requestLib;
  return new Promise((resolve, reject) => {
    debug('Starting request for the url: %s', url);
    requestLib('https://www.decolar.com/shop/flights/data/search/roundtrip/gru/fra/2017-12-17/2018-01-04/1/0/0/TOTALFARE/ASCENDING/NA/NA/NA/NA/NA', (error, response, body) => {
      if (error) {
        debug('Request error:', error)
        return reject(error);
      }
      if (response.statusCode >= 400) {
        return reject(`Request error: Code ${response.statusCode}, Body: ${response.body}`);
      }
      debug('Request finished');
      return resolve(body);
    });
  });
};

module.exports = doRequest;
