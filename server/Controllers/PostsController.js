const { Posts } = require('../models/index');

class PostsController {
  static calculateAverageRate(comments) {
    if (!comments || comments.length === 0) {
      return 0;
    }

    const totalRate = comments.reduce((sum, comment) => sum + comment.rate, 0);
    return (totalRate / comments.length).toFixed(1);
  };

  static async getPosts(req, res) {
    try {
      const allPosts = await Posts.findAll({ include: { all: true, nested: true } });

      allPosts.forEach((post) => {
        post.averageRate = PostsController.calculateAverageRate(post.posts_comments);
      });

      res.send(allPosts);
    } catch (error) {
      console.error('getPosts Error', error);
      res.status(500).send('Internal Server Error');
    }
  }
}

module.exports = { PostsController }