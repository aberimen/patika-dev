const Post = require("../models/Post");


exports.getIndexPage = async (req, res) => {

    const page = req.query.page || 1;
    const postsPerPage = 5;

    const posts = await Post.find()
        .sort({ 'createdAt': -1 })
        .skip((page - 1) * postsPerPage)
        .limit(postsPerPage);

    res.render('index', {
        posts,
        currentPage: page
    });
},

    exports.getAboutPage = (req, res) => {
        res.render('about');
    };

exports.getNewPostPage = (req, res) => {
    res.render('add_post');
};