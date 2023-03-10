const express = require('express');

const Router = express.Router();

const POST = [{
  title: 'jojo',
  content: '안녕하세요 조조에요!',
}];

Router.get('/', (req, res) => {
  const postCounts = POST.length;
  res.render('posts', { POST, postCounts });
});

Router.post('/add', (req, res) => {
  if (Object.keys(req.query).length >= 1) {
    if (req.query.title && req.query.content) {
      const newPost = {
        title: req.query.title,
        content: req.query.content,
      };
      POST.push(newPost);
      res.send('글 쓰기 완료!');
    } else {
      const err = new Error('쿼리 입력이 잘못되었습니다.');
      err.statusCode = 400;
      throw err;
    }
  } else if (req.body) {
    if (req.body.title && req.body.content) {
      const newPost = {
        title: req.body.title,
        content: req.body.content,
      };
      POST.push(newPost);
      res.redirect('/posts');
    } else {
      const err = new Error('폼 태그 입력이 잘못되었습니다.');
      err.statusCode = 400;
      throw err;
    }
  } else {
    const err = new Error('데이터가 입력되지 않았습니다.');
    err.statusCode = 400;
    throw err;
  }
});

module.exports = Router;
