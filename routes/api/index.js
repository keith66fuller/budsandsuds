const router = require("express").Router();
const budRoutes = require("./bud");
const crawlRoutes = require("./crawl");
const pubRoutes = require("./pub");

router.use("/bud", budRoutes);
router.use("/crawl", crawlRoutes);
router.use("/pub", pubRoutes);

module.exports = router;
