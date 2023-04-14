var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var emoji_controller = require('../controllers/emoji');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// emoji ROUTES ///
// POST request for creating a emoji.
router.post('/emoji', emoji_controller.emoji_create_post);
// DELETE request to delete emoji.
router.delete('/emoji/:id', emoji_controller.emoji_delete);
// PUT request to update emoji.
router.put('/emoji/:id', emoji_controller.emoji_update_put);
// GET request for one emoji.
router.get('/emoji/:id', emoji_controller.emoji_detail);
// GET request for list of all emoji items.
router.get('/emoji', emoji_controller.emoji_list);
module.exports = router;

