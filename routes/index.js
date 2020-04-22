var express = require('express');
var router = express.Router();

var article_controller = require('../controllers/article_controller.js');

/* GET home page. */
router.get('/', function(req, res, next)
{
  res.render('index', { title: 'UMSV' });
});

/* GET Articles. */
router.get('/articles', article_controller.findAllArticles);

// Add add_article route
router.get('/articles/add', function(req,res)
{
    res.render('add_article', {title:'Add Article'});
});

// Add article
router.post('/articles/add', article_controller.addArticle);

module.exports = router;
