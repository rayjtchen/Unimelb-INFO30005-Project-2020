var express = require('express');
var router = express.Router();

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

module.exports = router;
