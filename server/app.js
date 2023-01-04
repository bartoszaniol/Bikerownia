const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postsRoutes = require("./routes/posts-routes");
const usersRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use("/api/posts", postsRoutes);
app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknow error occured" });
});

const url =
  "mongodb+srv://bartek:testing123@cluster0.otz8sgc.mongodb.net/posts?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
