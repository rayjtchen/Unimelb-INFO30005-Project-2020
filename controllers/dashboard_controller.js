var express = require('express');
var router = express.Router();

//Bring in Models
let Article = require('../models/article');
let Support = require('../models/support');


var findUserArticles = async function (req,res) {
    var articles = await Article.find({author_id : req.user._id});

    var supports = await Support.find({user_id : req.user._id});

    supports = supports.map((value)=>{
        return value['article_id']
    })

    supports = await Article.find().where('_id').in(supports).exec();

    res.render('dashboard', {
        user: req.user,
        articles: articles,
        supports: supports
    });
};

module.exports.findUserArticles = findUserArticles;