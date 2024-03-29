const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  image: { type: String, required: true },
  posts: [{ type: mongoose.Types.ObjectId, require: true, ref: "Post" }],
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
