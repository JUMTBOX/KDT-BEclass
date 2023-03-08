// @ts-check

const express = require('express');

const app = express();
const PORT = 3000;

app.get('/:email/:password/:name/:gender', (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

app.get('/', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}번에서 열렸습니다.`);
});
