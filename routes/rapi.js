'use strict';
const router = require("express").Router();
const yelp = require("../routes/remote_api/yelp");

router.route("/search")
  .get(yelp.search)

module.exports = router;
