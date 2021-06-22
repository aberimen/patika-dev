const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();
const port = 3001;

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

const jobs = [
  { id: 1, name: 'Node.js Developer' },
  { id: 2, name: 'Node.js Tester' },
];

app.get('/jobs', (req, res) => {
  res.send(jobs);
});

app.listen(port, () => {
  console.log('app started on: ' + port);
});
