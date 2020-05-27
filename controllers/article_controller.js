
var express = require('express');
var router = express.Router();

//Bring in Models
let Article = require('../models/article');
let Comment = require('../models/comment');
var comment_controller = require('../controllers/comment_controller.js');

var findAllArticles = function (req, res)
{
    Article.find({}, function(err,articles)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render('articles',
            {
                title:'Articles',
                articles:articles
            });
        }
    });
};

var findAllCategoty = function (req, res)
{
    console.log(req.params.category);
    Article.find({"category": req.params.category}, function(err,articles)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render('articles',
                {
                    title:'Articles',
                    articles:articles
                });
        }
    });
};




// Get Single Article
var findOneArticle = function (req, res)
{
    Article.findById(req.params.id, function(err,article)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            comment_controller.findAllComment(article._id)
                .then((comments)=>{
                    res.render('article_id',
                    {
                        article:article,
                        comments:comments
                    });
                })
                .catch((message)=>{
                    res.render('article_id',
                    {
                        article:article,
                        message:message
                    });
                })
        }
    });
};



var addArticle = function(req,res)
{
    let article = new Article();
    article.title = req.body.title;
    article.author = req.user.username;
    article.author_email = req.user.email;
    article.category = req.body.category;
    article.author_id = req.user._id;
    article.summary = req.body.summary;
    article.body = req.body.body;

    article.save(function(err)
    {
        if(err){
            console.log(err);
            return;
        }
        else
        {
            res.redirect('/petition/articles/summary');
        }
    });
};



module.exports.findAllArticles = findAllArticles;
module.exports.addArticle = addArticle;
module.exports.findOneArticle = findOneArticle;
module.exports.findAllCategoty = findAllCategoty;