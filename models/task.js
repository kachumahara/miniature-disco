const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: String,
  assigned_to: String,
  description: String,
  priority: String,
  due_date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "to-do",
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
