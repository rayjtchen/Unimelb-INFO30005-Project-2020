var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// user schema
var UserSchema = mongoose.Schema({
    email: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
}, {collection: 'users'});

var User = module.exports = mongoose.model('User', UserSchema);