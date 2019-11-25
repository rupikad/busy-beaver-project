// Script to parse the routes JSON file
// into direction object and route object

/* eslint-disable */

const routes_response = require("./GETroutes_response.json");
const clonedeep = require('lodash/clonedeep');

function parse_routes() {
    // intialize route list array and
    // single route object
    let route_list = [];
    let single_route = {};

    // reading by route first
    for (let i = 0; i < routes_response.data.length; i++) {
        // get route id and stops
        single_route["route"] = routes_response.data[i].id;
        const stops = routes_response.data[i].attributes.stops;

        // append stops array to route object
        // make deep copy and push to array
        single_route = Object.assign({"stops": stops}, single_route);
        const copy_route = clonedeep(single_route);
        route_list.push(copy_route);

        // reset single_route object
        delete single_route["route"];
        delete single_route["stops"];
    }

    // console.log(route_list[0].stops.length) // eslint-disable-line no-console
    return route_list;
}

function parse_stops(route_list){

    // initialize objects/array
    let stop_list = [];
    let single_stop = {};

    // iterate thru route list and copy stops into stop list
    for(let i = 0; i < route_list.length; i++){
        let stops = route_list[i].stops;
        for(let j = 0; j < stops.length; j++) {
            // copy stop only if it doesn't exist in
            // stop list
            const check_name = el => el.name === stops[j].description;
            const name_exists = stop_list.some(check_name);

            if(!name_exists) {
                single_stop["name"] = stops[j].description;
                single_stop["lat"] = stops[j].latitude;
                single_stop["lng"] = stops[j].longitude;

                // deep copy stop into array
                const copy_stop = clonedeep(single_stop);
                stop_list.push(copy_stop);
                delete single_stop["name"];
                delete single_stop["lat"];
                delete single_stop["lng"];
            }
        }
    }
    return stop_list;
}

const route_list = parse_routes();
const stop_list = parse_stops(route_list);

