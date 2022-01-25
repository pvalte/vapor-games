const router = require('express').Router();
const { addComment, getCommentById, deleteComment, addReply, deleteReply } = require('../../controllers/comment-controller');

// create new comment on game
router.route('/:gameId')
    .post(addComment);

// get individual comment
router.route('/:commentId')
    .get(getCommentById);

// create reply (/api/comments/:gameId/:commentId)
router.route('/:gameId/:commentId')
    .put(addReply)
    .delete(deleteComment);

// delete reply /api/comments/:gameId/:commentId/:replyId
router.route('/:gameId/:commentId/:replyId')
    .delete(deleteReply);

module.exports = router;