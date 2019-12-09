var expect = require('chai').expect;
var assert = require('chai').assert;

var Event = require('../src/components/parse_JSON.js');
const routes_response = require("./GETroutes_response.json");


describe('parse_routes', function () {

    beforeEach(function () {
        assert.isObject(routes_response, 'is a json file');
    });




});
