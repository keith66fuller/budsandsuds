"use strict";
require('dotenv').config()
const googleMapsClient = require('@google/maps').createClient({
  key: process.env.APIKEY_GP
});


//https://developers.google.com/places/web-service/search

googleMapsClient
  .placesNearby({
    location: "41.875580, -87.645406",
    radius: 20000,
    type: "pub"
  }, function (err, response) {
    if (err) {
      throw JSON.stringify(err, null, 2)
    } else {
      // console.log("RESULTS: ", response);
      response.json.results.forEach(result => {
        // console.log(`RESULT: ${JSON.stringify(result)}`)
        // console.log(`PHOTO: ${JSON.stringify(result.photos[0].photo_reference)}`)
        // console.log(`RESULT: ${JSON.stringify(result,null,2)}`)
        googleMapsClient
          .place({
            placeid: result.place_id,
            fields: ["formatted_address", "name", "permanently_closed", "photo", "type", "url","geometry"]
          }, function (err, response) {
            if (err) {
              console.log( err)
            } else {
              console.log("search details: ", JSON.stringify(response, null,2));
            }
          })

          // googleMapsClient
          // .places({
          //   photoreference : result.photos[0].photo_reference,
          //   maxheight: 500
          // }, function (err, response) {
          //   if (err) {
          //     // console.log('ERROR',err)
          //     throw err
          //   } else {
          //     // console.log("PHOTO: ", response);
          //   }
          // })
      });
    }
  })



  googleMapsClient
  .placesPhoto({
    photoreference : "CmRaAAAACmUmltrNolPGjLNf4t451ieklEWciIciZ9XMZo_eMB-83jJm-QeaaCQJI8QcMD0lhbvl7Bk1BDWi_5G_CC1PlooWq0XU2FvrQJY_jOqDZ6wRj6H3LlCXKGENdLctpaZeEhDtA3qLOKZvCfjPIgLsn-BCGhTU5e6ExpgCt6tkHdDBGpy1o_kdUw"
  }, function (err, response) {
    if (err) {
      throw err
    } else {
      console.log("photo: ", response);
    }
  })