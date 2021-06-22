const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const Post = require('./models/Post');

const app = express();
const port = 3001;

//db
mongoose.connect('mongodb://localhost/clean-blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//template engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
  const posts = await Post.find();
  res.render('index', {
    posts
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add-new-post', (req, res) => {
  res.render('add_post');
});

app.post('/posts', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

app.listen(port, () => {
  console.log('app started on: ' + port);
});
