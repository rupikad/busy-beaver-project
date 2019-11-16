const express = require('express');
var request = require('request');
var router = express.Router();

var busroutesGET = function(req, res) {
    res.json({
        message: 'There should be routes here :)'
    });
}

router.route('/busroutes')
    .get(busroutesGET)

module.exports = router