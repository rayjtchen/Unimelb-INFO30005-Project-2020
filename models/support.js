let mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;


//Support Schema
let supportSchema = mongoose.Schema({
    article_id:{
        type: ObjectId,
        require: true
    },
    user_id:{
        type: ObjectId,
        require: true
    },
    user_name:{
        type: String,
        required: true
    },
    user_email:{
        type: String,
        require: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

let Support = module.exports = mongoose.model('Support', supportSchema);