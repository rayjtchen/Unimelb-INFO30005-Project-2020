let mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;


//Article Schema
let articleSchema = mongoose.Schema({
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
    category:{
        type: String,
        require: true
    },
    title:{
        type: String,
        required: true
    },
    summary:{
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
    },
    support:{
        type: Number,
        default: 0
    }
});

let Article = module.exports = mongoose.model('Article',articleSchema);