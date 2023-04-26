var express = require('express');
const emoji_controlers= require('../controllers/emoji');
var router = express.Router();


// A little function to check if we have an authorized user and continue on 
// or 
// redirect to login. 
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
} 

/* GET costumes */
router.get('/', emoji_controlers.emoji_view_all_Page );
module.exports = router;
/* GET detail costume page */
router.get('/detail', emoji_controlers.emoji_view_one_Page);
/* GET create costume page */
router.get('/create',secured,  emoji_controlers.emoji_create_Page);
/* GET create update page */
router.get('/update',secured,  emoji_controlers.emoji_update_Page);
/* GET delete costume page */
router.get('/delete', secured, emoji_controlers.emoji_delete_Page);