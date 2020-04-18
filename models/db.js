var mongoose = require('mongoose');

// Connect to DB
const uri = "mongodb+srv://project:project123@cluster0-rirss.mongodb.net/umsv?retryWrites=true&w=majority";

// Check connection
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => console.log('MongoDB Connected.....Ready to use'))
    .catch( err => console.log(err));