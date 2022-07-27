const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide details"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "must provide details"],
  },
  message: {
    type: String,
  
  },
});

module.exports = mongoose.model("Task", TaskSchema);
