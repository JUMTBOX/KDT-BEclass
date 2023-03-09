// @ts-check

const express = require('express');

const Router = express.Router();

const USER = {
  1: {
    id: 'yjey',
    name: '양재연',
  },
  2: {
    id: 'kim',
    name: '김유난',
  },
};

const userArr = [
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
  const userCounts = userArr.length;
  res.render('users', { userArr, userCounts });
});

Router.get('/id/:id', (req, res) => {
  const userData = USER[req.params.id];
  if (userData) {
    res.send(userData);
  } else {
    res.send('ID를 못찾겠어요');
  }
});

Router.post('/add', (req, res) => {
  if (req.query.id && req.query.name) {
    const newUser = {
      id: req.query.id,
      name: req.query.name,
    };

    USER[Object.keys(USER).length + 1] = newUser;

    res.send('회원등록 완료');
  } else {
    res.send('쿼리 입력이 잘못됨');
  }
});

Router.get('/', (req, res) => {
  res.send(userArr);
});

Router.put('/modify/:id', (req, res) => {
  if (!req.params.id || !req.query.id || !req.query.name) res.send('아이디가 틀렸어요');
  const modifyUser = {
    id: req.query.id,
    name: req.query.name,
  };
  console.log(USER[req.params.id]);
  USER[req.params.id] = modifyUser;
  res.send('회원정보 수정 완료');
});

Router.delete('/delete/:id', (req, res) => {
  if (req.params.id in USER) {
    delete USER[req.params.id];
    res.send('삭제 완료');
  } else {
    res.send('그런 회원은 없어요');
  }
});

module.exports = Router;
