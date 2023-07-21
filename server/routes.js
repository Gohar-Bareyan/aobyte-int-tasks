const express = require("express");
const { PostsController } = require("./Controllers/PostsController");
const { PostCommentsController } = require("./Controllers/PostCommentsController");

const router = express.Router();

router.get("/get-posts", PostsController.getPosts);

router.post("/add-post-comment", PostCommentsController.addPostComment);
router.delete("/delete-post-comment/:commentId", PostCommentsController.deletePostComment)

module.exports = { router };
