'use strict';

const requestLib = require('request'),
  debug = require('debug')('request');

const doRequest = ({url, headers}) => {
  let req = requestLib;
  return new Promise((resolve, reject) => {
    debug('Starting request for the url: %s', url);
    requestLib(url, (error, response, body) => {
      if (error) {
        debug('Request error:', error)
        return reject(error);
      }
      if (response.statusCode >= 400) {
        return reject(response.statusCode);
      }
      debug('Request finished');
      return resolve(body);
    });
  });
};

module.exports = doRequest;
