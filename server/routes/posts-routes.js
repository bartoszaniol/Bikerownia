const express = require("express");

const postsControllers = require("../controllers/posts-controller");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ DUMMY_POSTS });
});

router.post("/", postsControllers.addPost);

router.get("/:pid", postsControllers.getPostById);

router.patch("/:pid", postsControllers.updatePost);

router.delete("/:postId", postsControllers.deletePost);

router.post("/:postId/comment", postsControllers.addComment);

module.exports = router;
