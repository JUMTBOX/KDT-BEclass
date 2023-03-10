const express = require('express');

const Router = express.Router();

const user = [
  {
    id: 'yjey',
    name: '양재연',
    email: 'yjey12@naver.com',
  },
  {
    id: 'calm',
    name: '부레인',
    email: 'starjota@naver.com',
  },
];

Router.get('/', (req, res) => {
  const userCounts = user.length;
  res.render('users', { user, userCounts });
});

Router.get('/id/:id', (req, res) => {
  const userData = user.find((el) => el.id === req.params.id);
  if (userData) {
    res.send(userData);
  } else {
    const err = new Error('ID를 못찾겠어요');
    err.statusCode = 404;
    throw err;
  }
});

Router.post('/add', (req, res) => {
  console.log(req.body);

  if (Object.keys(req.query).length >= 1) {
    if (req.query.id && req.query.name && req.query.email) {
      const newUser = {
        id: req.query.id,
        name: req.query.name,
        email: req.query.email,
      };
      user.push(newUser);
      res.send('회원등록 완료');
    } else {
      const err = new Error('쿼리 입력이 잘못되었습니다.');
      err.statusCode = 400;
      throw err;
    }
  } else if (req.body) {
    if (req.body.id && req.body.name && req.body.email) {
      const newUser = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
      };
      user.push(newUser);
      res.redirect('/users');
    } else {
      const err = new Error('폼태그 입력을 확인하세요!');
      err.statusCode = 400;
      throw err;
    }
  } else {
    const err = new Error('데이터가 입력되지 않았습니다.');
    err.statusCode = 400;
    throw err;
  }
});

Router.put('/modify/:id', (req, res) => {
  if (req.query.name && req.query.email) {
    const userIndex = user.findIndex((el) => el.id === req.params.id);
    if (userIndex !== -1) {
      user[userIndex] = {
        id: req.params.id,
        name: req.query.name,
        email: req.query.email,
      };
      res.send('회원정보 수정 완료');
    } else {
      const err = new Error('해당 ID를 가진 회원이 없습니다..');
      err.statusCode = 404;
      throw err;
    }
  } else {
    const err = new Error('쿼리 입력이 잘못되었습니다.');
    err.statusCode = 404;
    throw err;
  }
});

Router.delete('/delete/:id', (req, res) => {
  console.log(req.params.id);
  const userIndex = user.findIndex((el) => el.id === req.params.id);
  if (userIndex !== -1) {
    user.splice(userIndex, 1);
    res.send('회원 삭제 완료');
  } else {
    const err = new Error('해당 ID를 가진 회원이 없습니다..');
    err.statusCode = 404;
    throw err;
  }
});

module.exports = Router;
