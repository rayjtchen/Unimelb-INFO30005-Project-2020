var express = require('express');
var router = express.Router();
const passport = require('passport');
const { ensureAuthenticated, forwardAuthenticated } = require('../models/auth');

var users_controller = require('../controllers/users_controller');
var article_controller = require('../controllers/article_controller.js');
var comment_controller = require('../controllers/comment_controller.js');
var dashboard_controller = require('../controllers/dashboard_controller.js');
var support_controller = require('../controllers/support_controller.js');

var validator = require('../controllers/validator');
var User = require('../models/user');
let Article = require('../models/article');

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

// verify email link
router.get('/confirmation/:userId', function(req, res){
  var userId = req.params.userId;
  if(userId.length != 24)
  {
    req.flash('error_msg', 'We could not found the verify link, please make sure it is correct');
    res.redirect('/users/login');
    return;
  }

  User.findOne({_id: userId}, function(err, foundObject) {
    if(err)
    {
      console.log(err);
    }else{
      if(!foundObject) {
        //user ID dont exit
        req.flash('error_msg', 'We could not found the verify link, please make sure it is correct');
        res.redirect('/users/login');
      }
      else{
        foundObject.confirm = true;
        foundObject.save();
        req.flash('success_register_msg', 'Thank you, your unimelb email address have been verified. You can login now!');
        res.redirect('/users/login');
      }
    }
  });
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

router.get('/dashboard', ensureAuthenticated, dashboard_controller.findUserArticles);

router.delete('/dashboard/:id', function(req, res){
  var query = {_id:req.params.id};
  Article.deleteOne(query)
      .then(res.send('Success'))
      .catch(err => console.log(err))
});


// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_register_msg', 'You are logged out');
  res.redirect('/users/login');
});

// Add add_article route
router.get('/articles/add', ensureAuthenticated, function(req,res)
{
  res.render('add_article', {title:'Add Article', user: req.user});
});

// Add article
router.post('/articles/add', ensureAuthenticated, article_controller.addArticle);

//Add comment
router.post('/comment/:id', ensureAuthenticated, comment_controller.addComment);

// Support the article
router.get('/support/:id', ensureAuthenticated, support_controller.support);


module.exports = router;
