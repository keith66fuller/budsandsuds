"use strict";
require('dotenv').config();
const mongoose = require("mongoose");
const db = require("./models");
const yelp = require("yelp-fusion");
const client = yelp.client(process.env.APIKEY_YF);
const offset = 25;
mongoose.connect("mongodb://heroku_73dkwvlz:jt2oau9qqjfpgqim8tf958n2aa@ds233581.mlab.com:33581/heroku_73dkwvlz");


// Yelp
client.search({
  location: "Chicago, IL", //Required if either latitude or longitude is not provided. Specifies the combination of "address, neighborhood, city, state or zip, optional country" to be used when searching for businesses.
  categories: "bars,divebars,pubs,brewpubs",
  limit: offset,
})
  .then(response => {
    const total = parseInt(response.jsonBody.total);
    console.log(`TOTAL RESULTS: ${total}`);

    let i = 0

    while (i < total) {
      i = searchOffset(i, offset)
    }


  })

  .catch(e => {
    // throw (e)
  })

function searchOffset(index, offset) {
  console.log(`OFFSET: ${index}`)
  client.search({
    location: "Chicago, IL", //Required if either latitude or longitude is not provided. Specifies the combination of "address, neighborhood, city, state or zip, optional country" to be used when searching for businesses.
    categories: "bars,divebars,pubs,brewpubs",
    limit: offset,
    offset: index
  })
    .then(response => {
      response.jsonBody.businesses.forEach(async pub => {
        await setTimeout(function() {
          db.Pub
          .create(pub)
          .then(dbModel => {
            console.log(`CREATED: ${pub.name}`)
          })
          .catch(e => {
          })
        }, 2000)

      });
      return index+=offset
    })
    .catch(e => {
      // throw (e)
    })
}

// db.Pub
// .find()
// .then(results => {
//   var bars = results.filter(result => {
//     return result.categories.some(category => {
//       // console.log(category.alias)
//       return category.alias == "bars" || category.alias == "pubs"
//     })

//     bars.forEach(bar => {
//       console.log(bar.categories)
//     })
//   })
// })
// .catch(err => {
//   throw err
// })

// db.Pub
// .find({
//   categories: {
//     $elemMatch: {
//       alias: "bars"
//     },
//     $elemMatch: {
//       alias: "pubs"
//     }
//   }
// })
// .then(results => {
//   console.log(`Found #: ${results.length}`)
//   // results.forEach(result => {
//   //   console.log(`NAME: ${result.name}`)
//   //   result.categories.forEach(category => {
//   //     console.log(`\t${category.alias}`)
//   //   })
//   // })
// })
// .catch(err => {
//   throw err
// })

// const C = {}
// db.Pub
//   .find()
//   .then(results => {
//     return new Promise(function(resolve, reject) {
//       results.forEach(result => {
//         result.categories.forEach(category => {
//           console.log(category.alias)
//           C[category.alias]++
//         })
//       })
//     })
//   })
//   .then(val => {
//     console.log(`VAL: ${C}`)
//   })
//   .catch(err => {
//     throw err
//   })






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
