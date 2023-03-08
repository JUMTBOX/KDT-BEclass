// @ts-check

const express = require('express');
// const cors = require('cors');

const app = express();
const PORT = 3000;
// app.use(cors());

app.use('/', (req, res, next) => {
  console.log('미들웨어1');
  req.reqTime = new Date();
  next();
});

app.use((req, res, next) => {
  console.log('미들웨어2');
  res.send(`요청 시간은 ${req.reqTime}입니다.`);
  next();
  console.log('next아래에 있는 콘솔 로그');
});

app.use((req, res, next) => {
  console.log('미들웨어3');
});

app.listen(PORT, () => {
  console.log(`서버가 포트${PORT}번에서 열렸습니다^^`);
});
