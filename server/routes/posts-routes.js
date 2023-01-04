const express = require("express");

const postsControllers = require("../controllers/posts-controller");

const router = express.Router();

router.get("/", postsControllers.getPosts); // Get all posts

router.post("/", postsControllers.addPost); // Add a new post

router.get("/:pid", postsControllers.getPostById); // Get a post by its id

router.get("/user/:uid", postsControllers.getUserPostsById); // Get all user's posts

router.patch("/:pid", postsControllers.updatePost); // Update a post

router.delete("/:pid", postsControllers.deletePost); // Delete a post

router.post("/:pid/comment", postsControllers.addComment); // Add a comment to a post

module.exports = router;
