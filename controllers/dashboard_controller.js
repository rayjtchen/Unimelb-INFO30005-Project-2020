var express = require('express');
var router = express.Router();

//Bring in Models
let Article = require('../models/article');

var findUserArticles = function (req, res) {
    Article.find({author_id : req.user._id}, function (err, articles) {
        if(err) {
            console.log(err);
        } else{
            res.render('dashboard', {
                user: req.user,
                articles:articles
            });
        }
    });
};

module.exports.findUserArticles = findUserArticles;

