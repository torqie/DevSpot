const express = require('express');
const router = express.Router();
const PostsController = require("../../controllers/posts.controller");
const CommentsController = require("../../controllers/comments.controller");

router.get('/', PostsController.all);
router.post('/', PostsController.create);
router.get('/:id', PostsController.one);
router.post('/:id/like', PostsController.likePost);
router.post('/:id/dislike', PostsController.dislikePost);
router.post('/:id/comment', CommentsController.create);
router.get('/:id/comments', PostsController.getComments);

module.exports = router;