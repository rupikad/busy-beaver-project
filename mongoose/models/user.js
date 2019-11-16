var mongoose = require('mongoose');
var event = require('./event.js');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    userId: Number,
    userName: { type: String, required: true },
    children: event.schema,
});

userSchema.methods.userToString = function() {
    return this.userName;
}


var user = mongoose.model("user", userSchema);
module.exports = user;