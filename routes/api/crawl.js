const router = require("express").Router();
const crawlsController = require("../../controllers/crawlsController");

// Matches with "/api/crawls"
router.route("/")
  .get(crawlsController.findAll)
  .post(crawlsController.create);

// Matches with "/api/crawls/:id"
router
  .route("/:id")
  .get(crawlsController.findById)
  .put(crawlsController.update)
  .delete(crawlsController.remove);

module.exports = router;
