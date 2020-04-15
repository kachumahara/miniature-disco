const router = require("express").Router();
const taskController = require("../../controllers/taskController");

// matches with /api/tasks
router
  .route("/")
  .get(taskController.findAll)

// matches with /api/tasks/add
router
  .route("/tasks/add")
  .post(taskController.create);

// Matches with "/api/tasks/:id"
router
  .route("/:id")
  .get(taskController.findById)
  .put(taskController.update)
  .delete(taskController.remove);

module.exports = router;
