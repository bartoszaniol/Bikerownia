const express = require("express");

const usersControllers = require("../controllers/users-controller");

const router = express.Router();

router.get("/:uid", usersControllers.findUser); // Get a user

router.post("/login", usersControllers.login); // Log in

router.post("/signUp", usersControllers.signup); // Sign up

module.exports = router;
