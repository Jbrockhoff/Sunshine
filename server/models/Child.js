const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const childSchema = new Schema({
  room: {
    type: Schema.Types.ObjectId,
    ref: "Room",
  },
  name: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  primaryContact: {
    type: String,
    required: true,
  },
  documentations: [
    {
      type: Schema.Types.ObjectId,
      ref: "Documentation",
    },
  ],
});

const Child = mongoose.model("Child", childSchema);

module.exports = Child;
