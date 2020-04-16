var express = require('express');
var router = express.Router();

var users_controller = require('../controllers/users_controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// register form
router.get('/register', function(req, res){
  res.render('register');
});

// login form
router.get('/login', function(req, res){
  res.render('login');
});

router.post('/register', users_controller.registerNewUser);

module.exports = router;
