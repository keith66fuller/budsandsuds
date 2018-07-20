const router = require("express").Router();
const budsController = require("../../controllers/budsController");

// Matches with "/api/buds"
router.route("/")
  .get(budsController.findAll)
  .post(budsController.create);

// Matches with "/api/buds/:id"
router
  .route("/:id")
  .get(budsController.findById)
  .put(budsController.update)
  .delete(budsController.remove);

module.exports = router;
