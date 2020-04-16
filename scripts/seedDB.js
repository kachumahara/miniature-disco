const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/strategyscope"
);

const taskSeed = [
  {
    status: "to-do",
    title: "Justin Test To-Do",
    description: "Justin testing task functionality.",
  },
  {
    status: "in-progress",
    title: "Justin Test In-Progress",
    description: "Justin testing task functionality.",
  },
  {
    status: "done",
    title: "Justin Test Done",
    description: "Justin testing task functionality.",
  },
];

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
