var mongoose = require('mongoose');

// Connect to DB
const uri = "mongodb+srv://project:project123@cluster0-rirss.mongodb.net/umsv?retryWrites=true&w=majority";

// Check connection
mongoose.connect(uri, function(err){
    if(!err){
        console.log('Connected to mongo.');
    }else{
        console.log('Failed to connect to mongo!', err);
    }
});