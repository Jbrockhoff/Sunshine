//Completed
const { Schema, model } = require('mongoose');

const daySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Day = model('Day', daySchema);

module.exports = Day;
