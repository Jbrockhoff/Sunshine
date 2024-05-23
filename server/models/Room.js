const { Schema, model } = require('mongoose');

const roomSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  children: [{ type: Schema.Types.ObjectId, ref: 'Child' }],
  lessons: [{ type: Schema.Types.ObjectId, ref: 'Lesson' }],
  documentation: [{ type: Schema.Types.ObjectId, ref: 'Documentation' }]
});

const Room = model('Room', roomSchema);

module.exports = Room;

