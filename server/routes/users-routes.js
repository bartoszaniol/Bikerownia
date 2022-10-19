const express = require("express");

const usersControllers = require("../controllers/users-controller");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(" GET");
  res.json({ message: "uzaa" });
});

router.get("/:uid", usersControllers.findUser);

module.exports = router;