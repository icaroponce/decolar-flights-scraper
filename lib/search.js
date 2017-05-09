'use strict';

const request = require('./utils/request');
const urlBuilder = require('./utils/url-builder');
const BASE_URL = 'https://www.decolar.com/shop/flights/data/search';

const search = (opts) => {
  const queryUrl = urlBuilder(opts);

  return new Promise((resolve, reject) => {
    return request({url: `${BASE_URL}/${queryUrl}`})
      .then(JSON.parse)
      .then(resolve)
      .catch(reject)
  });
};

module.exports = search;
