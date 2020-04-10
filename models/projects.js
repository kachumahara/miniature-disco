const mongoose = require("mongoose");

const Schema = mongoose.Schema

const projectSchema = new Schema({
  project: {
    type: String,
    Owner: String,
    index: true
  },
  description: String,
  DueDate: {
    type: Date,
    default: Date.now
  }
})

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;