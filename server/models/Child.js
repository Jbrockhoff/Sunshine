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
  familyMembers: {
    type: String,
    required: true,
  },
});

//Do I need this to be able to access the child id for documentation? 
//Is it important to us to be able to look up the documentation by childid?
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
