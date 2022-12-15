const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  subject: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  word: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Post", postSchema);
