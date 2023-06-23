const express = require('express');
const app = express.Router();


//댓글 작성
app.post('/작성', async (req, res) => {
  try {
    return res.json(await db.create('댓글', { ...req.body, commentId: await db.createCommentId('댓글') }));
  } catch (err) {
    return res.json(err);
  }
});

//댓글 수정
app.patch('/수정', async (req, res) => {
  try {
    return res.json(await db.updateOne('댓글', { commentId: req.body.commentId }, req.body));
  } catch (err) {
    return res.json(err);
  }
});

//댓글 삭제
app.delete('/삭제', async (req, res) => {
  try {
    return res.json(await db.deleteOne('댓글', { commentId: req.body.commentId, password: req.body.password }));
  } catch (err) {
    return res.json(err);
  }
});

module.exports = app;
