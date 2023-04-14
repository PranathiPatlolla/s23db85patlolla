const mongoose = require("mongoose")
const emojiSchema = mongoose.Schema({
emoji_face: String,
emoji_hand: String,
emoji_things: Number
})
module.exports = mongoose.model("emoji",
emojiSchema)