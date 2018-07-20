"use strict";
const yelp = require("yelp-fusion");
const client = yelp.client(process.env.APIKEY_YF);

module.exports = {
  search: function (req, res) {
    client.search({
        location: "Chicago, IL", //Required if either latitude or longitude is not provided. Specifies the combination of "address, neighborhood, city, state or zip, optional country" to be used when searching for businesses.
        categories: "bar",
        limit: "25",
      })
      .then(response => {
        console.log(response.jsonBody.businesses);
        res.json(response.jsonBody.businesses)
      })
      .catch(e => {
        console.log(e);
      })
  }
};

//Yelp Parameters
// term: "",
// location: "Chicago, IL", //Required if either latitude or longitude is not provided. Specifies the combination of "address, neighborhood, city, state or zip, optional country" to be used when searching for businesses.
// latitude: "",
// longitude: "",
// radius: "",
// categories: "bar",
// locale: "",
// limit: "25",
// offset: "",
// sort_by: "",
// price: "",
// open_now: "",
// open_at: "",
// attributes: ""

//Yelp Response
// {
//   "total": 8228,
//   "businesses": [
//     {
//       "rating": 4,
//       "price": "$",
//       "phone": "+14152520800",
//       "id": "E8RJkjfdcwgtyoPMjQ_Olg",
//       "alias": "four-barrel-coffee-san-francisco",
//       "is_closed": false,
//       "categories": [
//         {
//           "alias": "coffee",
//           "title": "Coffee & Tea"
//         }
//       ],
//       "review_count": 1738,
//       "name": "Four Barrel Coffee",
//       "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
//       "coordinates": {
//         "latitude": 37.7670169511878,
//         "longitude": -122.42184275
//       },
//       "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
//       "location": {
//         "city": "San Francisco",
//         "country": "US",
//         "address2": "",
//         "address3": "",
//         "state": "CA",
//         "address1": "375 Valencia St",
//         "zip_code": "94103"
//       },
//       "distance": 1604.23,
//       "transactions": ["pickup", "delivery"]
//     },
//     // ...
//   ],
//   "region": {
//     "center": {
//       "latitude": 37.767413217936834,
//       "longitude": -122.42820739746094
//     }
//   }
// }
