const router = require("express").Router();
const taskController = require("../../controllers/taskController");
const authRoute = require("../../utils/authO");

// matches with /api/tasks
router.route("/").get(authRoute, taskController.findAll);

// matches with /api/tasks/add
router
  .route("/add")
  .post(authRoute, taskController.create);

// Matches with "/api/tasks/:id"
router
  .route("/:id")
  .get(authRoute, taskController.findById)
  .put(taskController.update)
  .delete(authRoute, taskController.remove);

module.exports = router;
