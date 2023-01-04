const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false },
  comments: { type: [], required: false },
  creator: { type: String, require: true },
});

module.exports = mongoose.model("Post", postSchema);
