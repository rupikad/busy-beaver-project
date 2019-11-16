const express = require('express');
var request = require('request');
var router = express.Router();

var eventsGET = function(req, res) {
    let EventModel = require('./mongoose/models/event.js');
    EventModel.find({})
        .then(doc => {
            res.status(200);
            res.send(doc);
            res.end();
        })
        .catch(err => {
            res.status(500);
            res.send(err);
            res.end();
        })
}

var eventsPOST = function(req, res) {
    let EventModel = require('./mongoose/models/event.js')

    var eventTitle = req.body.eventTitle
    var eventStartTime = req.body.eventStartTime
    var eventStartDate = req.body.eventStartDate
    var eventEndTime = req.body.eventEndTime
    var eventEndDate = req.body.eventEndDate
    var location = req.body.location
    var recurring = req.body.recurring

    let event = new EventModel({
        eventTitle: eventTitle,
        eventStartTime: eventStartTime,
        eventStartDate: eventStartDate,
        eventEndTime: eventEndTime,
        eventEndDate: eventEndDate,
        location: location,
        recurring: recurring,
    })

    event.save()
        .then(doc => {
            res.status(200);
            res.send(doc);
            res.end();
        })
        .catch(err => {
            res.status(500);
            res.send(err);
            res.end();
        })


}

router.route('/events')
    .get(eventsGET)
    .post(eventsPOST)

module.exports = router