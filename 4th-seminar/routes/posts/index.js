const express = require('express');
const router = express.Router();
const postController = require('../../controller/postController');

/* [POST] localhost:3000/posts */
router.post('/', postController.createPost);

/* [GET] localhost:3000/posts */
router.get('/', postController.readPosts);

/* [POST] localhost:3000/posts/:postId/Like */
router.post('/:postId/Like', postController.createLike);

module.exports = router;