const HttpError = require("../models/http-error");

const DUMMY_USERS = [
  { id: "1", name: "a" },
  { id: "2", name: "b" },
];

const findUser = (req, res, next) => {
  const userId = req.params.uid;
  const user = DUMMY_USERS.find((user) => {
    return user.id === userId;
  });
  console.log(userId);
  if (!user) {
    const error = new HttpError("Could not find user with that id", 404);
    return next(error);
  }
  res.json({ message: "Found it" });
};

exports.findUser = findUser;
