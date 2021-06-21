const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();
const port = 3000;

app.use(express.static('public'));

//template engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add-new-post', (req, res) => {
  res.render('add_post');
});

app.listen(port, () => {
  console.log('app started on: ' + port);
});
