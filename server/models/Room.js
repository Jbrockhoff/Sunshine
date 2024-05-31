const { Schema, model } = require("mongoose");

const roomSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    children: [{ type: Schema.Types.ObjectId, ref: "Child" }],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Room = model("Room", roomSchema);

module.exports = Room;
