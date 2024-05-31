const { Schema, model } = require("mongoose");

const lessonsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  goals: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Lessons = model("Lessons", lessonsSchema);

module.exports = Lessons;
