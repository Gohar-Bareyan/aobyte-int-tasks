const { PostComments } = require("../models/index");

class PostCommentsController {
  static async addPostComment(req, res) {
    const postComments = await PostComments.create({
      body: req.body.comment,
      postId: req.body.postId,
      sender: req.body.sender
    })
    res.send(postComments)
  }

  static async deletePostComment(req, res) {
    await PostComments.destroy({
      where: { id: req.params.commentId }
    })
    res.send("ok")
  }
}

module.exports = { PostCommentsController };