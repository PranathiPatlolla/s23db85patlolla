var emoji = require('../models/emoji');
// List of all emojis
exports.emoji_list = async function(req, res) {
//res.send('NOT IMPLEMENTED: emoji list');
//List of all emojis
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
//exports.emoji_detail = function(req, res) {
//res.send('NOT IMPLEMENTED: emoji detail: ' + req.params.id);
//};
// for a specific emoji.
exports.emoji_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await emoji.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};

// Handle emoji create on POST.

//res.send('NOT IMPLEMENTED: emoji create POST');
// Handle emoji create on POST.
exports.emoji_create_post = async function(req, res) {
console.log(req.body)
let document = new emoji();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"emoji_type":"goat", "cost":12, "size":"large"}
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
//exports.emoji_delete = function(req, res) {
////res.send('NOT IMPLEMENTED: emoji delete DELETE ' + req.params.id);
//};
// Handle emoji update form on PUT.
//exports.emoji_update_put = function(req, res) {
//res.send('NOT IMPLEMENTED: emoji update PUT' + req.params.id);
//};
// Handle emoji update form on PUT.
exports.emoji_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await emoji.findById( req.params.id)
 // Do updates of properties
 if(req.body.emoji_face)
 toUpdate.emoji_face = req.body.emoji_face;
 if(req.body.emoji_hand) toUpdate.emoji_hand = req.body.emoji_hand;
 if(req.body.emoji_things) toUpdate.emoji_things = req.body.emoji_things;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
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
    // Handle Costume delete on DELETE.
exports.emoji_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await emoji.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

   // Handle a show one view with id specified by query
exports.emoji_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await emoji.findById( req.query.id)
    res.render('emojidetail',
   { title: 'emoji Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.emoji_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('emojicreate', { title: 'emoji Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for updating a costume.
// query provides the id
exports.emoji_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await emoji.findById(req.query.id)
    res.render('emojiupdate', { title: 'emoji Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle a delete one view with id from query
exports.emoji_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await emoji.findById(req.query.id)
    res.render('emojidelete', { title: 'emoji Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };