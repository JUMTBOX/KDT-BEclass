// @ts-check

const express = require('express');
const fs = require('fs');
// const cors = require('cors');

const app = express();
const PORT = 3000;
// app.use(cors());

app.use('/', async (req, res, next) => {
  console.log('미들웨어 1번');
  req.reqTime = new Date();
  req.fileContent = await fs.promises.readFile('../package.json', 'utf-8');
  next();
});

app.use((req, res, next) => {
  console.log('미들웨어 2번');
  console.log(req.fileContent);
  res.send(`package.json 파일의 내용은  \n ${req.fileContent}입니다.`);
  console.log(`요청된 시간은 ${req.reqTime}입니다.`);
});

app.listen(PORT, () => {
  console.log(`서버가 포트${PORT}번에서 열렸습니다^^`);
});
