var express = require('express');
var router = express.Router();

var article_controller = require('../controllers/article_controller.js');

/* GET All Articles */
router.get('/articles/summary', article_controller.findAllArticles);

router.get('/articles/:id', article_controller.findOneArticle);


module.exports = router;
