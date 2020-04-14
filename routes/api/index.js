const router = require("express").Router();
const projectRoutes = require("./projects");
const taskRoutes = require("./tasks");
// Project routes
router.use("/projects", projectRoutes);
router.use("/tasks", taskRoutes);

module.exports = router;
