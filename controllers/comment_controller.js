var express = require('express');
var router = express.Router();

//Bring in Models
let Comment = require('../models/comment');

var addComment = function(req,res)
{
    let comment = new Comment();
    comment.article_id = req.params.id;
    comment.author_id = req.user._id;
    comment.author = req.user.username;
    comment.author_email = req.user.email;
    comment.body = req.body.body;

    comment.save(function (err) {
        if (err) {
            console.log(err);
            return;
        } else {
            res.redirect('back');
        }
    });
};


var findAllComment = function(article_id)
{
    return new Promise((resolve, reject) => {
        Comment.find({article_id: article_id})
            .then(comments => { resolve(comments);})
            .catch(err => {reject('error could not display comment!!');});
    })
}

module.exports.addComment = addComment;
module.exports.findAllComment = findAllComment;