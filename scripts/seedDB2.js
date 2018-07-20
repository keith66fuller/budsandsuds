const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb://heroku_73dkwvlz:jt2oau9qqjfpgqim8tf958n2aa@ds233581.mlab.com:33581/heroku_73dkwvlz");

const pubSeed = [
  {
    name: "Burke's Public House",
    website: "http://www.burkespublichouse.com/",
    category: "Sports Bar",
    capacity: 100,
    hours: "4pm to 2am",
    drinks: [{
        name: "beer",
        price: 6,
    }],
    googleMapsURL: "",
    dateCreated: new Date(Date.now())
  },
];

db.Pubs
  .remove({})
  .then(() => db.Pubs.collection.insertMany(pubSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });