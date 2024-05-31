const { Schema, model } = require("mongoose");

const documentationSchema = new Schema({
  child: {
    type: Schema.Types.ObjectId,
    ref: "Child",
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  goals: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Documentation = model("Documentation", documentationSchema);

module.exports = Documentation;
