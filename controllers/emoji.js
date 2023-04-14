var emoji = require('../models/emoji');
// List of all emojis
exports.emoji_list = async function(req, res) {
//res.send('NOT IMPLEMENTED: emoji list');
//List of all Costumes
try{
theemoji = await emoji.find();
res.send(theemoji);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};


// for a specific emoji.
exports.emoji_detail = function(req, res) {
res.send('NOT IMPLEMENTED: emoji detail: ' + req.params.id);
};
// Handle emoji create on POST.
exports.emoji_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: emoji create POST');
};
// Handle emoji delete form on DELETE.
exports.emoji_delete = function(req, res) {
res.send('NOT IMPLEMENTED: emoji delete DELETE ' + req.params.id);
};
// Handle emoji update form on PUT.
exports.emoji_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: emoji update PUT' + req.params.id);
};