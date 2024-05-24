const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const childSchema = new Schema({
  childId: {
    type: String,
    required: true,
    unique: true,
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
});

childSchema.pre("save", function (next) {
  if (!this.childId) {
    this.childId = generateUniqueChildId();
  }
  next();
});

function generateUniqueChildId() {
    return shortid.generate();
}

const Child = mongoose.model("Child", childSchema);

module.exports = Child;
