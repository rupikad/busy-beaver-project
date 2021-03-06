var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    eventTitle: { type: String, required: true },
    eventStartTime: Date,
    eventStartDate: Date,
    eventEndTime: Date,
    eventEndDate: Date,
    location: String,
    recurring: Boolean,
    allDay: Boolean,
    notes: String
});

eventSchema.methods.eventToString = function() {
    return this.eventName;
}


var event = mongoose.model("event", eventSchema);
module.exports = event;