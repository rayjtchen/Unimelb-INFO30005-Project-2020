var express = require('express');
var router = express.Router();
const passport = require('passport');
const { ensureAuthenticated, forwardAuthenticated } = require('../models/auth');

var users_controller = require('../controllers/users_controller');
var validator = require('../controllers/validator');
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// register form
router.get('/register', function(req, res){
  let error={
    errors:[]
  };
  res.render('register', {title:'Register', errors:error});
});

// login form
router.get('/login', function(req, res){
  res.render('login', {title:'Login'});
});



router.post('/register', validator.createUser, users_controller.registerNewUser);


// Login Post request
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/users/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
})

// render dashboard
router.get('/dashboard', ensureAuthenticated,function(req, res){
  res.render('dashboard', {title:'Dashboard'});
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_register_msg', 'You are logged out');
  res.redirect('/users/login');
});



module.exports = router;
