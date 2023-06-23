require('dotenv').config();
const { DEVURL, PORT } = process.env;
const express = require('express');
const app = express();
const port = 3232;


app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

app.use('/', require('./Routes/index'));
app.use('/post', require('./Routes/post'));
app.use('/comment', require('./Routes/comment'));

app.listen(PORT, (err) => {
  if (err) return console.log(err);
  console.log('서버가 구동되었습니다.');
  console.log(DEVURL);
});
