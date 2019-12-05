const express = require('express');
var request = require('request');
var router = express.Router();

// Routes
var busroutes = require('./busroutes')
var events = require('./events')

router.use(busroutes);
router.use(events);

module.exports = router;