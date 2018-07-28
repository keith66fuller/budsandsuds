const router = require("express").Router();
const articleController = require("../../controllers/articleController");

router
  .route("/")
  .get(articleController.findAll)
  .post(articleController.create);

router
  .route("/:id")
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove);
  
router
  .route("/hello")
  .get((req,res) => {
    console.log(`HELLO`)
    res.send('Hello')
  });

module.exports = router;
