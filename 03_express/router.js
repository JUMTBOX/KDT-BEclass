// @ts-check

const express = require('express');

const app = express();
const PORT = 3000;
const userRouter = express.Router();

const USER = {
  1: {
    id: 'yang',
    name: '양재연',
  },
};

app.use('/users', userRouter);
userRouter.get('/', (req, res) => {
  res.send(USER);
});

userRouter.get('/id/:id', (req, res) => {
  const userData = USER[req.params.id];
  if (userData) {
    res.send(userData);
  } else {
    res.send('ID를 못찾겠어요');
  }
});

userRouter.post('/add', (req, res) => {
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

app.get('/', (req, res) => {
  res.send('welcome to express world!');
});

app.listen(PORT, () => {
  console.log(`port no.${PORT} opened...`);
});
