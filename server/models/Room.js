const childSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  parents: {
    type: [String],
    required: true
  }
});

const roomSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  children: [childSchema]
});

const Room = model('Room', roomSchema);

module.exports = Room;

