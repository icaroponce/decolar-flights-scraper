'use strict';

const request = require('./utils/request');
const BASE_URL = 'https://www.decolar.com/shop/flights/data/search';

// just for testing purposes 
let mockedUrlEnd = 'roundtrip/gru/fra/2017-06-14/2017-06-30/1/0/0/TOTALFARE/ASCENDING/NA/NA/NA/NA/NA';

const search = (opts) =>
  new Promise((resolve, reject) => {
    return request({url: `${BASE_URL}/${mockedUrlEnd}`})
      .then(resolve)
      .catch(reject)
  });

module.exports = search;
