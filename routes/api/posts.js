const express = require('express');
const router = express.Router();
const Post = require('../../models/Post.js');

// Make an absolute path
const resolve = require('path').resolve;

router.get('/', async (req, res) => {
    try {
        const post = await Post.find({});

        if (post.length === 0) {
            res.json({ err: 'Post does not exist' });
        } else {
            res.json(post);
        }
    } catch (e) {
        res.json({ Error: `Error1: ${e}` });
    }
});

router.post('/', async (req, res) => {
    const { title, description, image } = req.body

    const newPost = new Post({
        title,
        description,
        image
    })

    try {
        const post = await newPost.save()
        res.json(post)
    } catch (e) {
        res.json({ Error: `Error is ${e}` })
    }
})


module.exports = router;
