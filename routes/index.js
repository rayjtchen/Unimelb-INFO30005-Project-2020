var express = require('express');
var router = express.Router();


//Bring in Models
let Article = require('../models/article')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/articles', function (req, res)
{
  Article.find({}, function(err,articles)
  {
    if(err)
    {
      console.log(err);
    }
    else
    {
      res.render('articles',
          {
            title:'Articles',
            articles:articles
          });
    }
  });
});

module.exports = router;
