const express = require("express");
const bodyParser = require("body-parser");

const postsRoutes = require("./routes/posts-routes");
const usersRoutes = require("./routes/users-routes");

const app = express();

app.use(bodyParser.json());

app.use("/api/posts", postsRoutes);
app.use("/api/users", usersRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknow error occured" });
});

app.listen(4000);
