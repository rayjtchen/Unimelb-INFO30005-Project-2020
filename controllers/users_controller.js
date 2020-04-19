var express = require('express');
var router = express.Router();
var bcrypt  = require('bcryptjs');
const { validationResult } = require('express-validator');

// bring in user model
var User = require('../models/user');

var registerNewUser = function(req, res){
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        res.render('register', {
            title:'Register',
            errors:errors
        });
    }else {
        let newUser = new User({
            email:req.body.email,
            username:req.body.username,
            password:req.body.password
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
                        console.log('success');
                        req.flash('success_register_msg', 'Thank you for registered please verify your email');
                        res.redirect('/users/login');
                    }
                });
            });
        });
    }
};

module.exports.registerNewUser = registerNewUser;