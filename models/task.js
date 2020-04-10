const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  project_id: Number,
  user_id: String,
  description: String,
  Due_date: {
    type: Date,
    default: Date.now
  }
  
})

const Task = mongoose.model("Task", taskSchema)

module.exports = Task;