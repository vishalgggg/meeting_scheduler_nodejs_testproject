const express = require('express');
const router = express.Router();
const { Post, Comment } = require('../models');

// Create a new post
router.post('/', async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all posts with comments
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({ include: Comment });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;