const mongoose = require("mongoose")
const emojiSchema = mongoose.Schema({
emoji_face: String,
emoji_hand: {
    type: String,
    required: true,
    match: /^[a-zA-Z]+$/
  },
emoji_things: {
    type:Number,
    min: 1,
    max: 9000 } 
})
module.exports = mongoose.model("emoji",
emojiSchema)