const HttpError = require("../models/http-error");

const DUMMY_POSTS = [
  { id: "1", title: "A" },
  { id: "2", title: "B" },
];

const addPost = (req, res) => {
  const { title, description, creator } = req.body;
  const newPost = { id: "3", title };
  DUMMY_POSTS.push(newPost);
  res.status(201).json({ place: newPost });
};

const getPostById = (req, res, next) => {
  const postId = req.params.pid;
  const foundPost = DUMMY_POSTS.find((post) => {
    return post.id === postId;
  });

  if (!foundPost) {
    const error = new HttpError("Could not find the post", 404);
    return next(error);
  }

  res.json({ foundPost });
};

const updatePost = (req, res, next) => {
  const postId = req.params.pid;
  const updPost = DUMMY_POSTS.find((post) => {
    return post.id === postId;
  });

  if (!updPost) {
    const error = new HttpError("Could not find the post", 404);
    return next(error);
  }

  res.json({ updPost });
};

const deletePost = (req, res, next) => {
  const id = req.params.postId;
  const delPost = DUMMY_POSTS.find((post) => {
    return post.id === id;
  });

  if (!updPost) {
    const error = new HttpError("Could not find the post", 404);
    error.code = 404;
    return next(error);
  }
  res.json({ delPost });
};

const addComment = (req, res, next) => {
  const id = req.params.postId;
  const newPost = { id: "3", title: "C" };
  DUMMY_POSTS.push(newPost);
  res.json({ DUMMY_POSTS });
};

exports.addPost = addPost;
exports.getPostById = getPostById;
exports.updatePost = updatePost;
exports.deletePost = deletePost;
exports.addComment = addComment;
