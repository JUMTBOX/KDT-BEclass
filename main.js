// @ts-check

// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.end('Hello');
// });

// const PORT = 4000;

// server.listen(PORT, () => {
//   console.log(`THE SERVER IS LISTEN AT PORT ${PORT}...`);
// });

const express = require('express');

const cors = require('cors');
const { json } = require('stream/consumers');

const PORT = 3000;
const app = express();
app.use(cors());

app.get('/', (req, res) => {
//   const str = '안녕하세요, 백엔드 입니다!';
//   const json = JSON.stringify(str);
//   res.send(json);
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`서버가 ${PORT}에서 열렸습니다.`);
});
