var express = require('express');
var router = express.Router();
var bcrypt  = require('bcryptjs');

// bring in user model
var User = require('../models/user');

var registerNewUser = function(req, res){
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const password2 = req.body.password2;

    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not vailed').isEmail();
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

    let errors = req.validationErrors();

    if(errors){
        res.render('register', {
            errors:errors
        });
    }else {
        let newUser = new User({
            email:email,
            username:username,
            password:password
        });

        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(newUser.password, salt, function(err, hash){
                if(err){
                    console.log(err);
                }
                newUser.password = hash;
                newUser.save(function(err){
                    if(err){
                        console.log(err);

                    }else{
                        req.flash('success', 'You are now registered and can log in!');
                        res.redirect('/users/login');
                    }
                });
            });
        });
    }
};

module.exports.registerNewUser = registerNewUser;