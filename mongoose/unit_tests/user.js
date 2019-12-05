var expect = require('chai').expect;

var User = require('../models/user.js');

describe('user', function() {

    it('should be invalid if name is empty', function(done) {
        var user = new User();

        user.validate(function(err) {
            expect(err.errors.userName).to.exist;
            done();
        });
    });
});