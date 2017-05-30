# decolar-flights-scraper
A simple Node.JS module to scrape flights data from Decolar.com/Desapegar.com.

## Installation

```
npm install decolar-flights-scraper
```

## Usage

Available methods:

* [search](#search): Retrives a list of flights for the given params.
* [getAirportCode](#getAirportCode): Retrives codes of airports and cities to be used in search method.

### search

Retrieves a list of flights.

**Required params** :

* `type`: Indicates if the flight is one-way or roundtrip. Possible values: `roundtrip` and `one-way`.
* `departureLocation`: The three letter city or airport code. You can use the [getAirportCode](#getAirportCode) to find out.
* `arriveLocation`:  The same three letter city or airpot code, as used in de `departureLocation` param.
* `departureDate`: The date you plan to leave the departure location. Should be in format: `YYYY-MM-DD`.
* `arriveDate`: The date you plan to arrive in the departure location. Should be in format: `YYYY-MM-DD`. (This params is required unless the `type` is `one-way`).

**Optional Params**:

* `adultNumber`: (defaults to `1`). Sets the number of adults. Must be an integer.
* `fullDetail`: (defaults to `false`). By default, only the most crucial fields will be returned. Pass it as `true` to get the complete documents. It can be a bit verbose. 

Example:

```js
const decolar = require('decolar-flights-scraper');

const opts = {
    type: 'roundtrip',
    departureLocation: 'sao',
    arriveLocation: 'nyc',
    departureDate: '2017-09-26',
    arriveDate: '2017-10-10'
};

decolar.search(opts)
    .then(console.log)
    .catch(console.log)
```

Results: 

```
[ { totalPrice: 2735,
    currencyPriceCode: 'BRL',
    airlines: [ 'Copa Airlines' ] },
  { totalPrice: 2735,
    currencyPriceCode: 'BRL',
    airlines: [ 'Copa Airlines' ] },
  { totalPrice: 2752,
    currencyPriceCode: 'BRL',
    airlines: [ 'Avianca' ] },
  { totalPrice: 2920,
    currencyPriceCode: 'BRL',
    airlines: [ 'Avianca' ] },
    (...)
]
```

### getAirportCode ###

Retrieves information about a city or airport searched. The result contain the three letter code to be used in the search method. Use it if you don't know the codes for your flight.

Options:

* `query`: The partial or complete name of the city or airport which you want more information. It must contain at least 3 characters. 
* `locale`: (optional, by default is `en_US`). Set results language. 

Examples: 

```js
const decolar = require('decolar-flights-scraper');

decolar.getAirportCode({ query: 'frankfurt '})
    .then(console.log);
```

Results: 

```
{
  "unified": false,
  "data": {
    "AIRPORT": [
      {
        "object_id": "2313",
        "facet": "city",
        "description": "Frankfurt, Germany",
        "type": "CITY",
        "code": "FRA",
        "childs": [
          {
            "object_id": "193866",
            "facet": "airport",
            "description": "Frankfurt International  (rhein-main) Airport, Frankfurt, Germany",
            "type": "AIRPORT",
            "code": "FRA",
            "fuzzy_search_result": false,
            "latitude": 50.05072,
            "longitude": 8.56411
          },
          {
            "object_id": "193867",
            "facet": "airport",
            "description": "Neu Isenburg Airport, Frankfurt, Germany",
            "type": "AIRPORT",
            "code": "QGV",
            "fuzzy_search_result": false,
            "latitude": 50.05,
            "longitude": 8.683333
          },
          {
            "object_id": "193868",
            "facet": "airport",
            "description": "Frankfurt-Hahn Airport, Frankfurt, Germany",
            "type": "AIRPORT",
            "code": "HHN",
            "fuzzy_search_result": false,
            "latitude": 49.946815,
            "longitude": 7.27078
          }
        ]
      }
    ],
    "CITY": [
      {
        "object_id": "2313",
        "facet": "city",
        "description": "Frankfurt, Hessen, Germany",
        "type": "CITY",
        "code": "FRA",
        "fuzzy_search_result": false,
        "latitude": 50.11337,
        "longitude": 8.681362,
        "parent": {
          "object_id": "30453",
          "facet": "administrative_division",
          "type": "ADMINISTRATIVE_DIVISION"
        }
      }
    ]
  }
}
```

Use the code `data.AIRPORT[0].code` or `data.CITY[0].code` in the [search](#search) method for example. 

## More Info

* This module hits directly the decolar.com/despegar.com APIs, thus be careful of the requests amount you send at once, because even having set properly headers to avoid being detected as a crawler, with a careless and exaggerated usage of this module can face a ** blocked ip ** problem for a short period of time. We suggest you to throttle the requests or even distribute them among different servers if you have enough hardware resources.

* As the decolar.com/despegar.com API takes some seconds to respond ( you can note this behavior in their websites ), this module will take this seconds to retrieve the flights list as well. 

## Contributing

This module is quite recent, hence it has a tone of "TODOs" (some are explicit in the code) and things to be improved. If you have some suggestions or have found a bug, we will really appreciate if you open an issue or send a PR.
