var express = require('express');
var router = express.Router();
var bcrypt  = require('bcryptjs');
var nodemailer = require("nodemailer");
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
        sendEmail(newUser.email, newUser._id);

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
                        req.flash('success_register_msg', 'Thank you for registration please verify your email');
                        res.redirect('/users/login');
                    }
                });
            });
        });
    }
};

async function sendEmail(userEmail, userId) {
    console.log(userId);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'umsv.team@gmail.com',
            pass: 'INFO30005UMSV'
        }
    });

    var mailOptions = {
        from: 'umsv.team@gmail.com',
        to: userEmail,
        subject: 'UMSV - confirmation email',
        text: `Thank you for register UMSV
                Here is your conformation link: http://localhost:3000/users/confirmation/` + userId
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports.registerNewUser = registerNewUser;