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

var check_support = async function(article_id,user_id)
{
    await Support.findOne({ article_id: article_id, user_id: user_id }, function(err,support)
        {
            if (!err) {
                if(support) return true;
                else return false;
            }
        }
    )};
/*
var check_supports = async function(articles,user_id)
{
    //if(!user._id) return null;
    //if(articles = []) return null;
    let result = [];
    let a;
    for(a of articles)
    {
        let r = await check_support(a._id, user_id)
        console.log(r);
        result.push(r);
    }
    console.log(result);
    return result;
};*/


var check_supports = async function(articles,user_id)
{
    //if(!user._id) return null;
    //if(articles = []) return null;
    let result = [];
    let a;
    for(a of articles)
    {
        await Support.findOne({ article_id: a._id, user_id: user_id }, function(err,support)
        {
            //console.log(support);
            if (!err) {
                if(support) result.push(true);
                else result.push(false);
            }
        });
    }
    //console.log(result);
    return result;
};





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
            //res.redirect('back');
            return res.send(204);
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
            //res.redirect('back');
            return res.send(204);
        }
    });
};


module.exports.addSupport = addSupport;
module.exports.deleteSupport = deleteSupport;
module.exports.support = support;
module.exports.check_support = check_support;
module.exports.check_supports = check_supports;



//module.exports.addComment = addComment;
//module.exports.findAllComment = findAllComment;