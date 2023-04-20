var express = require('express');
const emoji_controlers= require('../controllers/emoji');
var router = express.Router();
/* GET costumes */
router.get('/', emoji_controlers.emoji_view_all_Page );
module.exports = router;
/* GET detail costume page */
router.get('/detail', emoji_controlers.emoji_view_one_Page);
/* GET create costume page */
router.get('/create', emoji_controlers.emoji_create_Page);
/* GET create update page */
router.get('/update', emoji_controlers.emoji_update_Page);
/* GET delete costume page */
router.get('/delete', emoji_controlers.emoji_delete_Page);