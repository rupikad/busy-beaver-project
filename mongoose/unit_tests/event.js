var expect = require('chai').expect;

var Event = require('../models/event.js');

describe('event', function() {

    it('should be invalid if title is empty', function(done) {
        var event = new Event();

        event.validate(function(err) {
            expect(err.errors.eventTitle).to.exist;
            done();
        });
    });
});