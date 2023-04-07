var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('emoji', { title: 'Emoji reactions of human' });
});

module.exports = router;