// @ts-check

const express = require('express');

const app = express();
const PORT = 3000;

app.get('/id/:id', (req, res) => {
  console.log(req.params);
  const data = JSON.stringify(req.params);
  res.send(`요청하신 회원정보는 ${data} 입니다.`);
});

app.get('/api', (req, res) => {
  res.send('api요청이 접수되었습니다.');
});

app.get('/', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}번에서 열렸읍니다...`);
});
