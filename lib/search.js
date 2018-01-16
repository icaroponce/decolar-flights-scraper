'use strict';

const request = require('./utils/request');
const urlBuilder = require('./utils/url-builder');
const getParseList = require('./utils/parse-flights.js')
const BASE_URL = 'https://www.decolar.com/shop/flights/results/';

const search = opts => {
  const queryUrl = urlBuilder(opts);

  return new Promise((resolve, reject) => {    
    console.log(BASE_URL+queryUrl);
    request({url: `${BASE_URL}/${queryUrl}`})
      .then(JSON.parse)
      .then(getParseList(opts))
      .then(resolve)
      .catch(reject)
  });
};

module.exports = search;
