const { Schema, model } = require("mongoose");

const documentationSchema = new Schema({
  childId: {
    type: String,
    ref: "Child",
    required: true,
  },
  childName:{
    type: String,
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
