const HttpError = require("../models/http-error");
const { where } = require("../models/post");
const Post = require("../models/post");

const addPost = async (req, res, next) => {
  const { title, description, image, creator } = req.body;
  const newPost = new Post({
    title,
    description,
    image,
    creator,
  });

  try {
    await newPost.save();
  } catch (err) {
    const error = new HttpError("Failed at adding new post", 500);
    return next(error);
  }

  res.status(201).json({ place: newPost });
};

const getPosts = async (req, res, next) => {
  let foundPosts;

  try {
    foundPosts = await Post.find();
  } catch (err) {
    const error = new HttpError("Something went wrong", 500);
    return next(error);
  }
  if (!foundPosts) {
    const error = new HttpError("Could not find the post", 404);
    return next(error);
  }

  res.json({
    foundPosts: foundPosts.map((post) => post.toObject({ getters: true })),
  });
};

const getPostById = async (req, res, next) => {
  const postId = req.params.pid;

  let foundPost;
  try {
    foundPost = await Post.findById(postId);
  } catch (err) {
    const error = new HttpError("Something went wrong", 500);
    return next(error);
  }
  if (!foundPost) {
    const error = new HttpError("Could not find the post", 404);
    return next(error);
  }

  res.json({ foundPost: foundPost.toObject({ getters: true }) });
};

const updatePost = async (req, res, next) => {
  const postId = req.params.pid;
  const { title, description } = req.body;
  let updPost;

  try {
    updPost = await Post.findById(postId);
  } catch (err) {
    const error = new HttpError("Something went wrong", 500);
    return next(error);
  }
  if (!updPost) {
    const error = new HttpError(
      "Could not find the post you want to update",
      404
    );
    return next(error);
  }
  updPost.title = title;
  updPost.description = description;

  try {
    await updPost.save();
  } catch (err) {
    const error = new HttpError("Could not update", 500);
    return next(error);
  }

  res.json({ updPost: updPost.toObject({ getters: true }) });
};

const deletePost = async (req, res, next) => {
  const postId = req.params.pid;

  let post;
  try {
    post = await Post.findById(postId);
  } catch (err) {
    const error = new HttpError("Something went wrong", 500);
    return next(error);
  }

  if (!post) {
    const error = new HttpError("Post not found", 404);
    return next(error);
  }
  try {
    await post.remove();
  } catch (err) {
    const error = new HttpError("Something went wrong", 500);
    return next(error);
  }

  res.json({ message: "Donzo" });
};

const addComment = (req, res, next) => {
  const postId = req.params.pid;
  //
  //
};

const getUserPostsById = async (req, res, next) => {
  const userId = req.params.uid;
  let posts;

  try {
    posts = await Post.find({ creator: userId });
  } catch (err) {
    const error = new HttpError("Something went wrong", 500);
    return next(error);
  }

  res.json({ posts: posts.map((post) => post.toObject({ getters: true })) });
};

exports.addPost = addPost;
exports.getPosts = getPosts;
exports.getPostById = getPostById;
exports.updatePost = updatePost;
exports.deletePost = deletePost;
exports.addComment = addComment;
exports.getUserPostsById = getUserPostsById;
