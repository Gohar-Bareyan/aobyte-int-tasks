const { PostComments } = require("../models/index");

class PostCommentsController {
  static async addPostComment(req, res) {
    try {
      const { comment, postId, sender } = req.body

      const postComments = await PostComments.create({
        body: comment,
        postId: postId,
        sender: sender
      })
      
      res.send(postComments)
    } catch (error) {
      console.error('addPosts Error', error);
      res.status(500).send('Internal Server Error');
    }
  }

  static async deletePostComment(req, res) {
    try {
      await PostComments.destroy({
        where: { id: req.params.commentId }
      })
      res.send("ok")
    } catch (error) {
      console.error('deletePosts Error', error);
      res.status(500).send('Internal Server Error');
    }
  }
}

module.exports = { PostCommentsController };