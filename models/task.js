const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: String,
  description: String,
  due_date: {
    type: Date,
    // default: Date.now,
  },
  status: {
    type: String,
    default: "to-do",
  }
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
