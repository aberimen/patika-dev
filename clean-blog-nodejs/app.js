const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const Post = require('./models/Post');
const postController = require('./controllers/postController');
const pageController = require('./controllers/pageController');

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

//pages
app.get('/', pageController.getIndexPage);
app.get('/about', pageController.getAboutPage);
app.get('/add-new-post', pageController.getNewPostPage);

//post
app.post('/posts', postController.createNewPost);
app.get('/posts/:id', postController.getPost);



app.listen(port, () => {
  console.log('app started on: ' + port);
});
