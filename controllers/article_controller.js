
var express = require('express');
var router = express.Router();

//Bring in Models
let Article = require('../models/article');

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



var addArticle = function(req,res)
{
    let article = new Article();
    article.title = req.body.title;
    article.author = req.body.author;
    article.body = req.body.body;

    article.save(function(err)
    {
        if(err){
            console.log(err);
            return;
        }
        else
        {
            res.redirect('/articles');
        }
    });
};

module.exports.findAllArticles = findAllArticles;
module.exports.addArticle = addArticle;