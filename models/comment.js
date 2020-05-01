let mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;


//Article Schema
let commentSchema = mongoose.Schema({
    article_id:{
        type: ObjectId,
        require: true
    },
    author_id:{
        type: ObjectId,
        require: true
    },
    author:{
        type: String,
        required: true
    },
    author_email:{
        type: String,
        require: true
    },
    body:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

let Comment = module.exports = mongoose.model('Comment', commentSchema);