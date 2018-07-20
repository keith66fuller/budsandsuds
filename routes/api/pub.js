const router = require("express").Router();
const pubsController = require("../../controllers/pubsController");

// Matches with "/api/pub"
router.route("/")
  .get(pubsController.findAll)
  .post(pubsController.create);

// Matches with "/api/pub/:id"
router
  .route("/:id")
  .get(pubsController.findById)
  .put(pubsController.update)
  .delete(pubsController.remove);

module.exports = router;
