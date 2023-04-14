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

//res.send('NOT IMPLEMENTED: emoji create POST');
// Handle Costume create on POST.
exports.emoji_create_post = async function(req, res) {
console.log(req.body)
let document = new emoji();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}
document.emoji_face = req.body.emoji_face;
document.emoji_hand = req.body.emoji_hand;
document.emoji_things = req.body.emoji_things;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// Handle emoji delete form on DELETE.
exports.emoji_delete = function(req, res) {
res.send('NOT IMPLEMENTED: emoji delete DELETE ' + req.params.id);
};
// Handle emoji update form on PUT.
exports.emoji_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: emoji update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.emoji_view_all_Page = async function(req, res) {
    try{
    theemoji = await emoji.find();
    res.render('emoji', { title: 'emoji Search Results', results: theemoji });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };