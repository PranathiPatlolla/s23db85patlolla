var express = require('express');
const emoji_controlers= require('../controllers/emoji');
var router = express.Router();
/* GET costumes */
router.get('/', emoji_controlers.emoji_view_all_Page );
module.exports = router;
