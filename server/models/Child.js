const dayjs = require('dayjs');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const childSchema = new Schema(
  {
    room: {
      type: Schema.Types.ObjectId,
      ref: "Room",
    },
    name: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
      required: true,
      get: (timestamp) => dayjs(timestamp).format("MM/DD/YYYY"),
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
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Child = mongoose.model("Child", childSchema);

module.exports = Child;
