const express = require('express');
const router = express.Router();
const { Comment, Post } = require('../models');

// Create a new comment for a post
router.post('/:postId', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    const comment = await Comment.create(req.body);
    await post.addComment(comment);
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all comments for a post
router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.postId, { include: Comment });
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post.Comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;