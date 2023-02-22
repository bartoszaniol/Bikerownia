const express = require("express");
const { check } = require("express-validator");

const usersControllers = require("../controllers/users-controller");

const router = express.Router();

router.get("/:uid", usersControllers.findUser); // Get a user

router.post("/login", usersControllers.login); // Log in

router.post(
  "/signup",
  [
    check("username").notEmpty(),
    check("email").isEmail(),
    check("password").isLength({ min: 5 }),
  ],
  usersControllers.signup
); // Sign up

module.exports = router;
