
var express = require('express');
var router = express.Router();

//Bring in Models
let Article = require('../models/article');
let Comment = require('../models/comment');
var comment_controller = require('../controllers/comment_controller.js');
var support_controller = require('../controllers/support_controller.js');

var findAllArticles = async function (req, res)
{
    Article.find({}, async function(err,articles)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            articles.sort(function(a, b) {return b.support - a.support});

            let support_list = [];
            if(req.user)
                support_list = await support_controller.check_supports(articles, req.user._id);
            console.log(support_list);
            res.render('articles',
                {
                    title:'Articles - All',
                    articles:articles,
                    user:req.user,
                    support:support_list
                });
        }
    });
};

var findAllCategoty = async function (req, res)
{
    Article.find({"category": req.params.category}, async function(err,articles)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {

            let support_list = [];
            if(req.user)
                support_list = await support_controller.check_supports(articles, req.user._id);
            console.log(support_list);
            res.render('articles',
                {
                    title:'Articles - ' + req.params.category,
                    articles:articles,
                    user:req.user,
                    support:support_list
                });
        }
    });
};

var searchArticle = async function (req, res)
{
    Article.find({"title": new RegExp(req.query.search, "i")}, async function(err,articles)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            if(articles.length == 0)
            {
                res.render('articles',
                    {
                        title:'Article not found',
                        articles:articles
                    });
            }
            else
            {
                let support_list = [];
                if(req.user)
                    support_list = await support_controller.check_supports(articles, req.user._id);
                console.log(support_list);
                res.render('articles',
                    {
                        title:'We found ' + articles.length + ' article(s)',
                        articles:articles,
                        user:req.user,
                        support:support_list
                    });
            }
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


var sortArticles = function (req, res)
{
    let articles = req.article;
    if(req.body.sort == "name")
    {
        articles.sort(function(a, b) {return b.support - a.support});
    }
    res.render('articles',
        {
            title:'Articles - All',
            articles:articles
        });
};




module.exports.findAllArticles = findAllArticles;
module.exports.addArticle = addArticle;
module.exports.findOneArticle = findOneArticle;
module.exports.findAllCategoty = findAllCategoty;
module.exports.searchArticle = searchArticle;