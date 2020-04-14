const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/strategyscope"
);

const projectSeed = [
  {
    project: "test one",
    description: "this is a test project",
    dueDate: "2020-04-20",
  },
  {
    project: "test two",
    description: "this is a test project",
    dueDate: "2020-04-20",
  },
  {
    project: "test three",
    description: "this is a test project",
    dueDate: "2020-04-20",
  },
  {
    project: "test four",
    description: "this is a test project",
    dueDate: "2020-04-20",
  },
];

const taskSeed = [
  {
    name: "back end",
    assigned_to: "Bob",
    description: "server side code",
    priority: "low",
    due_date: "20200420",
  },
];

db.Project.remove({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Task.remove({})
  .then(() => db.Task.collection.insertMany(taskSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
