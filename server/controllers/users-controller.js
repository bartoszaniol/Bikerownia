const HttpError = require("../models/http-error");
const User = require("../models/user");

const findUser = async (req, res, next) => {
  const userId = req.params.uid;

  let user;

  try {
    user = await User.findById(userId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong // could not find the guy",
      500
    );
    return next(error);
  }

  res.json({ message: "Found the guy" });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Something went wrong", 500);
    return next(error);
  }

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError("User not found or wrong credentials", 401);
    return next(error);
  }

  res.json({ message: "Logged in" });
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Invalid inputs passed", 422));
  }
  const { username, email, password, image } = req.body;
  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Something went wrong", 500);
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError("User already exists", 422);
    return next(error);
  }

  const createdUser = new User({
    username,
    email,
    password,
    image,
    posts: [],
  });
  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("Something went wrong", 500);
    return next(error);
  }
  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

exports.findUser = findUser;
exports.login = login;
exports.signup = signup;
