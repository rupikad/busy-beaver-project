const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const db = require('./mongoose/dbHelper');

const port = 3000;

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Behold The MEVN Stack!'
    });
});

app.get('/events', (req, res) => {
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
})

app.post('/events', (req, res) => {
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


})

app.listen(port, () => {
    console.log(`listening on ${port}`);
});