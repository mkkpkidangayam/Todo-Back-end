const mongoose = require("mongoose");

const taskModel = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tasks", taskModel);
