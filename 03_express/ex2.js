// @ts-check

const express = require('express');
const userRouter = require('./routes/users');

const app = express();

const PORT = 3000;

app.set('view engine', 'ejs');
app.use((express.static('public')));
// app.use(express.static('/03_express/views'));
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('HELLO FROM EXPRESS!');
});

app.listen(PORT, () => {
  console.log(`${PORT}열렸다..`);
});
