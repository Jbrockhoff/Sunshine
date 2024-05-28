const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const roomSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  children: [{ type: Schema.Types.ObjectId, ref: 'Child' }],
  password: {
    type: String,
    required: true
  }
}, 
{
  toJSON: {
    virtuals: true
  }
}

);

roomSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// This is a custom method to compare and validate password for logging in
roomSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Room = model('Room', roomSchema);

module.exports = Room;

