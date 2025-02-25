const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    receiver_id:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    },
    sender_id:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    },
    messages:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('chat',ChatSchema);