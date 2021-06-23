const Post = require("../models/Post");


exports.getIndexPage = async (req, res) => {
    const posts = await Post.find().sort({ 'createdAt': -1 });
    res.render('index', {
        posts
    });
},

    exports.getAboutPage = (req, res) => {
        res.render('about');
    };

exports.getNewPostPage = (req, res) => {
    res.render('add_post');
};