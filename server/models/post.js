const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false },
  comments: [{ type: mongoose.Types.ObjectId, required: true }],
  creator: { type: mongoose.Types.ObjectId, require: true, ref: "User" },
});

module.exports = mongoose.model("Post", postSchema);
