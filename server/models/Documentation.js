const childSchema = new Schema({
  domain: {
    type: String,
    required: true
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

const documentationSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  children: [childSchema],
});

const Documentation = model("Documentation", documentationSchema);

module.exports = Documentation;
