var mongoose = require('mongoose');
//var Schema = mongoose.Schema;

// user schema
var UserSchema = new mongoose.Schema({
    email: {type: String, required: true},
    confirm: {type: Boolean, default: false},
    username: {type: String, required: true},
    password: {type: String, required: true},
    date: {type: Date, default: Date.now}
}, {collection: 'users'});

var User = module.exports = mongoose.model('User', UserSchema);