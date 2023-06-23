const express = require ('express');
const app = express.Router();

//게시글 작성
app.post('/작성', async (req, res) => {
  try {
    return res.json(await db.create('게시글', { ...req.body, postId: await db.createPostId('게시글') }));
  } catch (err) {
    return res.json(err);
  }
});

//게시글 수정
app.patch('/수정', async (req, res) => {
  try {
    return res.json(await db.updateOne('게시글', { postId: req.body.postId }, req.body));
  } catch (err) {
    return res.json(err);
  }
});

//게시글 삭제
app.delete('/삭제', async (req, res) => {
  try {
    return res.json(await db.deleteOne('게시글', { postId: req.body.postId, password: req.body.password }));
  } catch (err) {
    return res.json(err);
  }
});

module.exports = app;
