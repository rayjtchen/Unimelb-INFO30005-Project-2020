var express = require('express');
var router = express.Router();

//Bring in Models
let Support = require('../models/support');
let Article = require('../models/article');


var support = function(req,res)
{
    Support.findOne({ article_id: req.params.id, user_id: req.user._id }, function(err,support)
    {
        if (!err) {
            if(support) deleteSupport(req,res);
            else addSupport(req,res);
        }
    }
)};


var addSupport = function(req,res)
{
    let support = new Support();
    support.article_id = req.params.id;
    support.user_id = req.user._id;
    support.user_name = req.user.username;
    support.user_email = req.user.email;

    Article.findById(req.params.id, function (err, article) {
        if (!err) {
            let temp = article.support;
            temp = temp+1;
            article.support = temp;
            article.save();
        }
    });

    support.save(function (err) {
        if (err) {
            console.log(err);
            return;
        } else {
            res.redirect('back');
        }
    });
};


var deleteSupport = function(req,res)
{
    Article.findById(req.params.id, function (err, article) {
        if (!err) {
            let temp = article.support;
            temp = temp-1;
            article.support = temp;
            article.save();
        }
    });

    Support.deleteOne({ article_id: req.params.id, user_id: req.user._id }, function (err) {
        if (err) {
            console.log(err);
            return;
        } else {
            res.redirect('back');
        }
    });
};


module.exports.addSupport = addSupport;
module.exports.deleteSupport = deleteSupport;
module.exports.support = support;



//module.exports.addComment = addComment;
//module.exports.findAllComment = findAllComment;