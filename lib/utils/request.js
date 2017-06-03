'use strict';

const requestLib = require('request'),
  debug = require('debug')('request');

// hardcoded... TODO: generate it randomly.
const userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36';

const defaultHeaders = {
  Host: 'www.decolar.com',
  Origin: 'https://www.decolar.com',
  Connection: 'keep-alive',
  Accept: '*/*',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': userAgent,
  'X-UOW': 'f-results-gui-08-127727',
};

const doRequest = opts => {
  let headers = Object.assign(defaultHeaders, opts.headers);

  return new Promise((resolve, reject) => {
    debug('Starting request for the url: %s', opts.url);

    requestLib({
        url: opts.url,
        headers: headers
      },
      (error, response, body) => {
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
